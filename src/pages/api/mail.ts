import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';
import { recaptchaAxios } from "../../axios/axiosBackend";
import sendGridMail from '@sendgrid/mail';
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

interface FormData {
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    contactSubject: string;
    contactMessage: string;
    token: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  await NextCors(req, res, {
    // Options
    methods: ['GET','POST'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  const formData: FormData = req.body;
  const human = await validateHuman(formData.token);

  if (!human) {
    res.status(400);
    return res.json({ success: false, errors: ["You are not authenticated"] });
  }

  const message = {
    to: process.env.SENDGRID_MAIL_RECEIVER,
    from: process.env.SENDGRID_MAIL_SENDER, // Change to your verified sender
    subject: formData.contactSubject,
    text: `Name: ${formData.contactName}\n
           Contact: ${formData.contactPhone} \n
           Email: ${formData.contactEmail} \n
           Message: ${formData.contactMessage}`,
    html: `Name: ${formData.contactName}
           Contact: ${formData.contactPhone}
           Email: ${formData.contactEmail}
           Message: ${formData.contactMessage}`,
  }

  try {
    await sendGridMail.send(message);
    res.status(200);
    return res.json({ success: true, errors: [] });
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({ success: false, errors: ['Error occured while trying to send your details to International Institute of Theravada. Please contact your Administrator.']});
  }
};

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await recaptchaAxios.post(`/siteverify?secret=${secret}&response=${token}`,{},{});
  const success = response.data['success'];
  return success;
}
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Axios from 'axios';
import { mainAxios } from '../../axios/axiosBackend';
import { Modal } from 'react-bootstrap';
import styles from './ContactUs.module.css';
import AlertBox from '../alertbox/AlertBox';
import CustomToast from '../toast/Toast';
import CustomSpinner from '../spinner/Spinner';

const schema = yup.object().shape(
  {
    contactName: yup.string().required('Name is mandatory'),
    contactSubject: yup.string().required('Subject is mandatory'),
    contactMessage: yup.string().required('Message is mandatory'),
    contactEmail: yup.string().when('contactPhone', {
      is: (fieldPhone) => !fieldPhone || fieldPhone.length === 0,
      then: yup
        .string()
        .required('At least one of the fields [ email or phone ] is required')
        .email('Email must be valid'),
    }),
    contactPhone: yup.string().when('contactEmail', {
      is: (fieldEmail) => !fieldEmail || fieldEmail.length === 0,
      then: yup
        .string()
        .required('At least one of the fields [ email or phone ] is required'),
    }),
  },
  ['contactEmail', 'contactPhone']
);

function ContactUs() {
  const recaptchaRef = React.useRef({});
  let submitButton = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    resetField,
    clearErrors,
  } = useForm({ resolver: yupResolver(schema) });

  const [show, setShow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const handleClose = () => setShow(false);
  const handleSpinnerClose = () => setShowSpinner(false);
  const [varient, setVarient] = useState('primary');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDesc, setAlertDesc] = useState('');

  const onSubmit = async (data) => {
    setShowSpinner(true);
    disableDomElement(submitButton);

    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    if (token == '') {
      return;
    }

    const chunk = { ...data, token };

    console.log('************** HOST NAME *****************');
    console.log(process.env.NEXT_PUBLIC_HOST);

    console.log('************** TEST *****************');
    console.log(process.env.RECAPTCHA_SECRET_KEY);

    mainAxios
      .post('/mail', chunk, {})
      .then((response) => {
        resetContactUsPageFields();
        enableDomElement(submitButton);
        setShowSpinner(false);
        setAlertBox(
          'success',
          'Success',
          'Message sent to International Institute of Theravada successfully.'
        );
        setShow(true);
      })
      .catch((e) => {
        setShowSpinner(false);
        //console.log('error', e.response.data);
        console.log('error', e.response.data);
        //setAlertBox('danger', 'Failure', e.response.data.errors.join(', '));
        setShow(true);
        enableDomElement(submitButton);
      });
  };

  const setAlertBox = (variant, title, desc) => {
    setVarient(variant);
    setAlertTitle(title);
    setAlertDesc(desc);
  };

  const disableDomElement = (domElement) => {
    domElement.current &&
      domElement.current.setAttribute('disabled', 'disabled');
  };

  const enableDomElement = (domElement) => {
    domElement.current && domElement.current.removeAttribute('disabled');
  };

  const resetContactUsPageFields = () => {
    resetField('contactName');
    resetField('contactPhone');
    resetField('contactEmail');
    resetField('contactSubject');
    resetField('contactMessage');
  };

  const validateCommMethods = () => {
    trigger(['contactEmail', 'contactPhone']);
  };

  return (
    <div className={styles.contactDataWrapper}>
      <AlertBox
        show={show}
        handleClose={handleClose}
        setShow={setShow}
        varient={varient}
        alertTitle={alertTitle}
        alertDesc={alertDesc}
      />
      <Modal
        className="centerSpinnerModal"
        show={showSpinner}
        onHide={handleSpinnerClose}
      >
        <CustomSpinner
          showSpinner={showSpinner}
          handleSpinnerClose={handleSpinnerClose}
        />
      </Modal>

      <div
        className={`${styles.contactLeftContainer} ${styles.paddingLeft30} ${styles.pr99}`}
      >
        <div className={styles.nameContainer}>
          <div className={styles.lineHeight1}>International Institute of</div>
          <div className={styles.lineHeight1}>Theravada</div>
        </div>
        <div
          className={`${styles.addressContainer} ${styles.mb25} ${styles.pl20}`}
        >
          <div className={`${styles.addressImageCont} ${styles.mr24}`}>
            <img
              className={`d-block w-100 ${styles.pinImgMaxWidth}`}
              src="/Address.svg"
              alt="Address.svg"
              width="24px"
            />
          </div>
          <div className={styles.addressNameContainer}>
            <div>Hinetikamala Watta Road</div>
            <div>Kaluwaragas wewa</div>
            <div>Sri Lanka</div>
          </div>
        </div>
        <div
          className={`${styles.commMethodContainer} ${styles.mb25} ${styles.pl20}`}
        >
          <div className={`${styles.contactImageCont} ${styles.mr18}`}>
            <img
              className={`d-block w-100 ${styles.contactImgMaxWidth}`}
              src="/contact.svg"
              alt="Contact.svg"
              width="36px"
            />
          </div>
          <div className={styles.contactDetailsContainer}>
            <div>info@iit.lk</div>
            <div>+94 112 897 8899</div>
          </div>
        </div>
        <div
          className={`${styles.directionsContainer} ${styles.mb25} ${styles.pl20}`}
        >
          <div className={`${styles.directionsImageCont} ${styles.mr24}`}>
            <img
              className={`d-block w-100 ${styles.pinImgMaxWidth}`}
              src="/Directions.svg"
              alt="Directions.svg"
              width="24px"
            />
          </div>
          <div className={styles.directionDetailsContainer}>
            <a>Get Directions</a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.contactRightContainer} ${styles.paddingHorizontal30}`}
      >
        <form
          className={styles.contactUsForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={`${styles.mb26} ${styles.flexContainer}`}>
            <div className={styles.mr32}>
              <label
                htmlFor="contactName"
                className={`form-label ${styles.contactLabelsText}`}
              >
                Name
              </label>
              <input
                type="text"
                className={`form-control ${styles.width356} ${styles.pd19} ${styles.bgColorBrown} ${styles.contactInputText} ${styles.height68}`}
                id="contactName"
                {...register('contactName')}
              />
              <div className={`${styles.InvalidFeedback}`}>
                {errors.contactName?.message}
              </div>
            </div>
            <div>
              <label
                htmlFor="contactEmail"
                className={`form-label ${styles.contactLabelsText}`}
              >
                Email
              </label>
              <input
                type="email"
                className={`form-control ${styles.width356} ${styles.pd19} ${styles.bgColorBrown} ${styles.contactInputText} ${styles.height68}`}
                id="contactEmail"
                {...register('contactEmail')}
                onBlur={validateCommMethods}
              />
              <div className={`${styles.InvalidFeedback}`}>
                {errors.contactEmail?.message}
              </div>
            </div>
          </div>
          <div className={`${styles.mb26} ${styles.flexContainer}`}>
            <div className={styles.mr32}>
              <label
                htmlFor="contactPhone"
                className={`form-label ${styles.contactLabelsText}`}
              >
                Phone
              </label>
              <input
                type="text"
                className={`form-control ${styles.width356} ${styles.pd19} ${styles.bgColorBrown} ${styles.contactInputText} ${styles.height68}`}
                id="contactPhone"
                {...register('contactPhone')}
                onBlur={validateCommMethods}
              />
              <div className={`${styles.InvalidFeedback}`}>
                {errors.contactPhone?.message}
              </div>
            </div>
            <div>
              <label
                htmlFor="contactSubject"
                className={`form-label ${styles.contactLabelsText}`}
              >
                Subject
              </label>
              <input
                type="text"
                className={`form-control ${styles.width356} ${styles.pd19} ${styles.bgColorBrown} ${styles.contactInputText} ${styles.height68}`}
                id="contactSubject"
                {...register('contactSubject')}
              />
              <div className={`${styles.InvalidFeedback}`}>
                {errors.contactSubject?.message}
              </div>
            </div>
          </div>
          <div className={styles.mb26}>
            <label
              htmlFor="contactMessage"
              className={`form-label ${styles.contactLabelsText}`}
            >
              Message
            </label>
            <textarea
              className={`form-control ${styles.minHeight213} ${styles.pd19} ${styles.bgColorBrown} ${styles.contactInputText}`}
              id="contactMessage"
              rows="3"
              {...register('contactMessage')}
            ></textarea>
            <div className={`${styles.InvalidFeedback}`}>
              {errors.contactMessage?.message}
            </div>
          </div>
          <div className={styles.mb26}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="normal"
            />
          </div>
          <div className={styles.mb26}>
            <button
              type="submit"
              className={styles.submitButton}
              ref={submitButton}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

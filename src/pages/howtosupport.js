import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';

import {
  Tabs,
  CardGroup,
  Card,
  Container,
  Tab,
  Row,
  Col,
  ListGroup,
  Sonnet,
} from 'react-bootstrap';
import {
  BsWatch,
  BsFillBookFill,
  BsCheckSquare,
  BsShieldFillPlus,
  BsCardChecklist,
  BsListStars,
  BsPersonCheckFill,
} from 'react-icons/bs';

export default function HowToSupport() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>How to Support</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="international institute of theravada"
        />
      </Head>

      <div className="navbarCarouselWrapper contact">
        <Header />
      </div>

      <MainLayoutSection
        title="How To Support"
        description="You can support us on Construction of IIT, Healthcare of monks of IIT and Propagating the Dhamma."
        photo="/How-to-support-new.png"
        backgroundImg="url(/Ellipse-2.svg)"
      />

      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

      <Container>
        <div className="how-to-support-content">
          <div className="how-to-support-main-body">
            {/* <div className="how-to-support-how-to-donate-header">
              Main Aspects
            </div> */}
            <div className="how-to-support-aspect-container">
              <div className="how-to-support-main-body-col">
                <div className="how-to-support-main-aspects">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-53 margin-right-8"
                    src="/wheelbarrow.svg"
                    alt="construction"
                  />
                  <p className="construct-header">Construction</p>
                </div>
                <div className="how-to-support-main-aspects-text">
                  Currently constructions are underway in a 100-acre land for
                  forty (40) residential chambers (kuṭis), two Lecture Halls,
                  one Permanent AV Studio, a Study Council, one Sewing Room and
                  one Robe Washing Shed in order to commence the five-year
                  teacher training program. Constructions for the main complex
                  that will provide lodging facilities for about 300 monks,
                  Lecture Theatres and a Library is expected to begin in the
                  near future.
                </div>
              </div>

              <div className="how-to-support-main-body-col mt-7">
                <div className="how-to-support-main-aspects how-to-support-main-aspects-mobile">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-38 margin-right-8"
                    src="/health.svg"
                    alt="healthcare"
                  />
                  <p className="construct-header">Healthcare</p>
                </div>

                <div className="how-to-support-main-aspects-text">
                  Contributions can be made for the medical purposes and other
                  healthcare related needs of the monks residing in the
                  Institute.
                </div>
                <br></br>
                <br></br>
                <div className="how-to-support-main-aspects">
                  <img
                    className="d-block w-100 banner-social-icon-max-width-53 margin-right-16"
                    src="/dhamma.svg"
                    alt="Dhamma"
                  />
                  <p className="construct-header">Propagating Dhamma</p>
                </div>
                <div className="how-to-support-main-aspects-text">
                  One can contribute to spread the noble Theravada Dhamma all
                  around the globe for the benefit of humankind.
                </div>
              </div>
            </div>

            {/* <div className="how-to-support-quote">
              <img
                className="d-block w-100 banner-social-icon-max-width-45"
                src="/leftQuote.svg"
                alt="Quote"
              />
              <div className="how-to-support-hr-quote-container">
                <hr className="how-to-support-hr-quote"></hr>
                <div className="how-to-support-quote-container">
                  <blockquote className="blockquote mb-0 ">
                    <p className="how-to-support-quote-p">
                      Sāgārā anagārā ca - ubho aññoññanissitā, <br />
                      Ᾱrādhayanti saddhammaṃ - yogakkhemaṃ anuttaraṃ.
                    </p>
                    <footer className="how-to-support-source-name">
                      Sutta Pitaka, Kuddaka Nikāya, Itivuttaka, Catukkanipāta,
                      bahukārasuttaṃ
                    </footer>
                    <br />
                    <p className="how-to-support-quote-p">
                      While lay devotees support monks with relevant requisites,
                      monks enrich them with the noble Dhamma. Thus, the
                      disciples of the Tathāgata get freed from suffering.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div> */}
          </div>
          <div className="how-to-support-main-body-bank-info">
            <div className="how-to-support-main-body-bank-info-section1">
              <div className="how-to-support-main-body-bank-info-section1-title">
                How to Contribute
              </div>
              <div className="how-to-support-main-body-bank-info-section1-body">
                Devotees who are willing to join the meritorious act of
                supporting the IIT can do so with the below information.
              </div>
            </div>

            <div className="how-to-support-main-body-bank-info-section2">
              <div className="how-to-support-main-body-bank-info-section2-subtitle">
                Account Name
                <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                  Kshemabhoomi Sansadaya
                </div>
                <hr></hr>
              </div>

              <div className="how-to-support-main-body-bank-info-section2-col2">
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Account Number
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    119165000021
                  </div>
                  <hr></hr>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Bank Name
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    Sampath Bank PLC
                  </div>
                  <hr></hr>
                </div>
              </div>

              <div className="how-to-support-main-body-bank-info-section2-col2">
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Branch Name
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    Panchikawatte
                  </div>
                  <hr></hr>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Bank Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    7278
                  </div>
                  <hr></hr>
                </div>
              </div>

              <div
                className="how-to-support-main-body-bank-info-section2-col2"
                style={{ paddingBottom: '23px' }}
              >
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Branch Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    191
                  </div>
                  <hr className="how-to-support-main-body-bank-info-separator"></hr>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  SWIFT Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    BSAMLKLX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-to-support-quote">
          <img
            className="d-block w-100 banner-social-icon-max-width-45"
            src="/leftQuote.svg"
            alt="Quote"
          />
          <div className="how-to-support-hr-quote-container">
            <hr className="how-to-support-hr-quote"></hr>
            <div className="how-to-support-quote-container">
              <blockquote className="blockquote mb-0 ">
                <p className="how-to-support-quote-p">
                  Sāgārā anagārā ca - ubho aññoññanissitā, <br />
                  Ārādhayanti saddhammaṃ - yogakkhemaṃ anuttaraṃ.
                </p>
                <footer className="how-to-support-source-name">
                  Sutta Pitaka, Kuddaka Nikāya, Itivuttaka, Catukkanipāta,
                  bahukārasuttaṃ
                </footer>
                <br />
                <p className="how-to-support-quote-20">
                  While lay devotees support monks with relevant requisites,
                  monks enrich them with the noble Dhamma. Thus, the disciples
                  of the Tathāgata get freed from suffering.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    },
  };
}

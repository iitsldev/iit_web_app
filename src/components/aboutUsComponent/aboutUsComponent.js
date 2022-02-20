import React, { useRef } from 'react';
import styles from './aboutUsComponent.module.css';
import { missionData } from '../../data/aboutUsData';
import OurFocusCardComponent2 from '../ourFocusCardComponent/ourFocusCardComponent2';
import cardInfo from '../../data/ourFocusData.json';
import Slider from '../slider/slider';

function AboutUsComponent() {
  // Create an array for card components to view in
  // card slider.
  const cards = cardInfo.map((data, index) => {
    return <OurFocusCardComponent2 key={index} cardData={data} />;
  });

  // Reference to the Slider component
  const sliderRef = useRef();

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slideLeft();
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slideRight();
    }
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsHeader} id="what-is-iit">
          <h1 className={styles.mainHeader}>What is IIT?</h1>
          <p className={styles.aboutUsMainIntro}>
            The International Institute of Theravada (IIT) is a comprehensive
            training institute aimed at facilitating spiritual and academic
            development of Buddhist monks, based on Theravada teachings. It is
            inclusive and accommodative, irrespective of sects (Nikaya) and
            other differences within the Theravada Buddhist clergy. The IIT
            would disseminate the teachings of the Buddha as per the ancient
            Theravada texts, to Buddhist practitioners across the globe.
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            height="100%"
            width="100%"
            position="absolute"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=International%20Institute%20of%20Therav%C4%81da,%20Heenatikalmavatta,%20Rajavigama,%20Karuwalagaswewa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <div className={styles.mapInformation}>
          <div className={styles.mapInformationDetails}>
            <h2 className={styles.subHeading1}>Where is the IIT?</h2>
            <p className={styles.mapTextInfo}>
              Located in Sri Lanka (Karuwalagaswewa, near Anamaduwa), a country
              where theravāda Buddhism is preserved and practiced extensively,
              the IIT will cater to monastics from all parts of the world.
            </p>
          </div>
          <div className={styles.mapInformationLink}>
            <div className={styles.mapIcon}>
              <img src="/GetDirections.svg" className={styles.mapIconImage} />
            </div>
            <div className={styles.directionText}>
              <div className={styles.directionHeading}>GetDirections</div>
              <div className={styles.directionSubHeading}>
                View in google map
              </div>
            </div>
            <div className={styles.linkArrow}>
              <a
                href="https://www.google.com/maps/place/International+Institute+of+Therav%C4%81da/@7.964815,79.98393,13z/data=!4m5!3m4!1s0x0:0x55e0440823643e03!8m2!3d7.9662346!4d79.9838372?hl=en-GB"
                target="_blank"
              >
                <img src="/Arrow01.svg" className={styles.arrowImage} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.establishment} id="establishment">
          <h1 className={styles.mainHeader}>Establishment</h1>
          <div className={styles.establishmentContent}>
            <p className="mbEstablishmentPara">
              The <i>Saṅgha</i> community, especially the Sri Lankan{' '}
              <i>Saṅgha</i> community has witnessed great setbacks during the
              past few decades in spirituality, knowledge and practice. One of
              the main reasons for this phenomenon is the absence of a proper
              monk-training program during the initial stages of the monkhood.
              This vacuum was clearly visible at least for the past seven
              decades. Though there had been a few attempts to rectify this
              situation, no coherent, well-focused and well-structured mechanism
              had been established so far, mainly in the contemporary tradition
              of Theravada monks.
            </p>

            <p className="mbEstablishmentPara">
              Due to the lack of learned and disciplined monks within the Sri
              Lankan society, pure philosophy of Theravada Buddhism is at the
              brink of being distorted, misinterpreted and misguided. Also, the
              real purpose of monkhood is being diverted towards arenas which
              are entirely against the real Dhamma and Vinaya.
            </p>

            <div className={`${styles.establishmentSub} ${styles.establishmentSub1}`}>
              <div>
                <img
                  src="/kuti.png"
                  className={`${styles.establishmentImage} ${styles.establishmentImage1}`}
                />
              </div>
              <p className="mbEstablishmentPara">
                Observing this timely need a group of young competent monks from
                the Śrī Kalyāṇī Yogashrama Saṃsthā, Sri Lanka who have completed
                their studies in Myanmar and exposed to forest traditions in
                Thailand and elsewhere took the initiatives to establish the
                International Institute of Theravada (IIT), a monk training
                center focused on capacitating monks who can lead their own
                spiritual lives and render correct spiritual advices to others.
                With the erudition garnered from the courses conducted in the
                institute, student monks of IIT are expected to sustain the
                lineage of the Theravada clergy in its purest form.
              </p>
            </div>

            <div className={`${styles.establishmentSub} ${styles.establishmentSub2}`}>
              <div>
                <img
                  src="/mahathero.png"
                  className={`${styles.establishmentImage} ${styles.establishmentImage2}`}
                />
              </div>
              <p className="mbEstablishmentPara">
                Founding monks of the IIT are students of the Most Venerable
                Late Na-Uyane Ariyadhamma Mahā Nāyaka Thera, the Head of the
                Śrī Kalyāṇī Yogashrama Saṃsthā and the Vice President of the
                Śrī Rāmñña Mahā Nikāya, Sri Lanka. They visited Myanmar for
                higher studies in Theravada doctrine with the blessings of the
                Mahā Thera and return to Sri Lanka, having successfully
                completed their studies.
              </p>

              <p className="establishmentPara">
                The auspicious establishment of IIT took place on the 15th
                November 2019 with the offering of six residential chambers
                (kuṭis) for the Mahā Saṅgha by Honorable Maitreepala Sirisena,
                the President of Democratic Socialist Republic of Sri Lanka.
                Contruction of the kuṭis were done by the Sri Lankan army.
              </p>
            </div>

            <p>
              The land of approximately 87 acers known as Heenatikalma Watta,
              where IIT is located, was offered to the Mahā Saṅgha, on the 25th
              April 2019, by pious devotee Mr Chandrakeerthi Bandara and his
              family under the guidance of Most Venerable Agulgamuwe Ariyananda
              Mahā Thera, the abbot of the well-renowned Na-Uyana Forest
              Meditation Center, Malsiripura, Sri Lanka.
            </p>

            {/* <div className={styles.establishmentSub}>
              <div className={styles.establishmentSubLeft}>
                <div className={styles.establishmentSubRight}>
                  <img src="/VenAgulugamaThero.jpg" className={styles.establishmentImage1} />
                </div>
              </div>
              <div className={styles.establishmentSubRight}>
                <p>
                  The land of approximately 87 acers known as Heenatikalma Watta, where
                  IIT is located, was offered to the Mahā Saṅgha, on the 25th April 2019, by pious devotee
                  Mr Chandrakeerthi Bandara and his family under the guidance of Most Venerable Agulgamuwe
                  Ariyananda Mahā Thera, the abbot of the well-renowned Na-Uyana Forest Meditation Center,
                  Malsiripura, Sri Lanka.
                </p>
              </div>
            </div> */}

            {/* <div className={styles.establishmentSub}>
              <div className={styles.establishmentSubLeft}>
                <div className={styles.establishmentSubRight}>
                  <img src="/VenAgulugamaThero.jpg" className={styles.establishmentImage1} />
                </div>
              </div>
              <div className={styles.establishmentSubRight}>
                <p>
                  The land of approximately 87 acers known as Heenatikalma Watta, where
                  IIT is located, was offered to the Mahā Saṅgha, on the 25th April 2019, by pious devotee
                  Mr Chandrakeerthi Bandara and his family under the guidance of Most Venerable Agulgamuwe
                  Ariyananda Mahā Thera, the abbot of the well-renowned Na-Uyana Forest Meditation Center,
                  Malsiripura, Sri Lanka.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.missionHeading} id="our-vision-and-mission">
          <h2 className={styles.subHeading2}>Vision & Mission</h2>
        </div>
        <div className={styles.missionDetails}>
          <div className={styles.missionBriefing}>
            <p className={styles.brefingText}>
              The IIT shall always function to achieve its vision and mission.
            </p>
          </div>
          <div className={styles.missionInfo}>
            {missionData.map((data, index) => {
              return (
                <div key={index} className={styles.missionDataContainer}>
                  <div className={styles.missionImageContainer}>
                    <img src={data.image} className={styles.missionImage} />
                  </div>
                  <div className={styles.missionText}>{data.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.ourFocusContainer} id="our-focus">
        <div className={styles.ourFocusInnerContainer}>
          <div className={styles.ourFocusHeader}>Our Focus</div>
          <div className={styles.ourFocusSubHeader}>
            <div className={styles.subHeaderText}>
              Academic Courses and Training Programs will be focused on
            </div>
            <div className={styles.sliderButtonContainer}>
              <div className={styles.sliderButton} onClick={slideRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-left ${styles.buttonLeftImage}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </div>
              <div className={styles.sliderButton} onClick={slideLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-right ${styles.buttonRightImage}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.focusCards}>
          <Slider cardInfo={cards} ref={sliderRef} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent;

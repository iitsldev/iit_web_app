import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from './MeditationComponent.module.css';
import VideoCardComponent from '../videoCardComponent/videoCardComponent';
import cardInfo from '../../data/meditationData.json';
import Slider from '../slider/slider';

function MeditationComponent() {
  // Create an array for card components to view in
  // card slider.
  const cards = cardInfo.map((data, index) => {
    return <VideoCardComponent key={index} cardData={data} />;
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
    <div>
      <Container>
        <div className={styles.meditationHelp}>
          Are you looking for guidance for your mediation? IIT is willing to render a helping hand in your noble quest.
        </div>
        <div className={styles.meditationContainer} id="samatha-meditation">
          <div className={styles.meditationInnerContainer}>
            <p className={styles.title}>Samatha Meditation</p>
            <p className={styles.description}>
              There are forty (40) meditation subjects called samatha bhāvanā
              (meditation) to tranquilize our mind. Monks in IIT are given
              proper instructions to practice samatha and calm down their
              thoughts.
            </p>
          </div>
          <div className={styles.meditationInnerContainer} id="vipassana-meditation">
            <p className={styles.title}>Vipassanā Meditation</p>
            <p className={styles.description}>
              One apprehends the reality of life and world with wisdom through
              insight meditation (vipassanā bhāvanā). Theravada tradition has
              preserved a doctrine which contains gem-like information of this
              special training that has proven to yield fruition for two
              millennia.
            </p>
          </div>
        </div>
      </Container>

      <div className={styles.rootContainer}>
        <div className={styles.ourFocusContainer}>
          <div className={styles.ourFocusInnerContainer}>
            <div className={styles.ourFocusHeader}></div>
            <div className={styles.ourFocusSubHeader}>
              <div className={styles.subHeaderText}>
                Meditation Instructions
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
    </div>
  );
}

export default MeditationComponent;

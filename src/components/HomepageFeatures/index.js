import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import videoFile from '../../../static/files/CharitAble_Intro.mp4';

const FeatureList = [
  {
    title: '1. Your Cash Flow',
    image: require('@site/static/img/CashFlow.png').default,
    description: (
      <>
        Knowing your cash flows allows for financially sound decisions to be made while impacting the lives of others
      </>
    ),
  },
  {
    title: '2. Simple Donation Process',
    image: require('@site/static/img/Interests.png').default,
    description: (
      <>
        Your interests will be used to suggest charities with causes that aligns them
      </>
    ),
  },
  {
    title: '3. Charities',
    image: require('@site/static/img/Charities.png').default,
    description: (
      <>
        Charities shown are based on your interests. Find out what are their causes and take part in them
      </>
    ),
  },
  {
    title: '4. Allocation',
    image: require('@site/static/img/Donation_Allocation.png').default,
    description: (
      <>
        What makes us different is that you can donate to different charities at once! Simply allocate your donation amount accordingly
      </>
    ),
  },
  {
    title: "5. You're All Set!",
    image: require('@site/static/img/Summary.png').default,
    description: (
      <>
        It's that simple!<br/>Your donations goes a long way, impacting the lives of those in need
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.imageWrapper)}>
        <img src={image} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles['lexend-font']} style={{marginBottom: '0'}}>{title}</h3>
        <p className={styles['lexend-font']}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const imageRef = useRef(null);

  useEffect(() => {
    // Calculate the maximum image height
    const images = document.getElementsByClassName(styles.featureImage);
    let maxHeight = 0;
    for (let i = 0; i < images.length; i++) {
      maxHeight = Math.max(maxHeight, images[i].clientHeight);
    }

    // Set the maximum height as the fixed height for all the images
    for (let i = 0; i < images.length; i++) {
      images[i].style.height = `${maxHeight}px`;
    }
  }, []);
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.centerRow)} style={{ marginTop: '20px', marginBottom: '20px' }}>
          <div className={clsx('col-md-6 text--center')}>
            <p className={clsx(styles['lexend-font'], styles.displayText)}>
              Ever face a <b style={{ fontSize: "30px", color: "#DD7373" }}>dilemma in decision-making</b><br /> for your donations?<br />Who to donate to? How much to donate?
            </p>
          </div>
          <div className={clsx('col-md-6 justify-content-center', styles.addMarginLeft, styles.addMarginTop)}>
            <video controls width="640" height="360" className={styles.videoStyling}>
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={clsx('row text--center', styles.centerRow)} style={{ marginTop: '20px', marginBottom: '20px' }}>
          <p className={clsx(styles['lexend-font'], styles.displayText)}><span style={{color: "#00aeef", fontSize: '32px'}}>Charit<b>A</b>ble</span> simplifies the donation process for you!<br/>All it takes is <span style={{fontSize: '28px'}}><b>5 simple steps</b></span></p>
        </div>
        <div className={clsx('row', styles.centerFeatures)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

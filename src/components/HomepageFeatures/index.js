import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import videoFile from '../../../static/files/Charitable_Intro.mp4';
import decisionMakingIcon from "../../../static/img/decision-making.png"

const FeatureList = [
  {
    title: 'Unified Login',
    Svg: require('@site/static/img/login.svg').default,
    description: (
      <>
        We help users gain confidence by using Barclays unified login for the donation transactions<br></br>
        Freepik i think
      </>
    ),
  },
  {
    title: 'Simple Donation Process',
    Svg: require('@site/static/img/donation.svg').default,
    description: (
      <>
        We simplify the donation process for individuals who faces dilemma in decision making
        by using data analytics to inform financially sound decisions<br></br>
        <a href="https://storyset.com/data">Data illustrations by Storyset</a>
      </>
    ),
  },
  {
    title: 'Impact Lives',
    Svg: require('@site/static/img/impacting.svg').default,
    description: (
      <>
        Your donations goes a long way, impacting the lives of those in need<br></br>
        <a href="https://storyset.com/people">People illustrations by Storyset</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
            <video controls width="512" height="288" className={styles.videoStyling}>
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

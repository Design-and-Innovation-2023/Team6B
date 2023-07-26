import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

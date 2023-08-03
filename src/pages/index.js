import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
// Import your logo image
import logoImage from '../../static/img/Logo_Homepage.png';// Update the path accordingly

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={logoImage} alt="Logo" className={styles.logo} width="60%" height="auto"/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              Our Design Process 🖋️
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://www.figma.com/proto/E77zN6Nmwc14UuebMuBXQ2/Auto-Donate-Web?type=design&node-id=502-391&t=vhcfDIjy7X4iw5TZ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=502%3A391&mode=design">
              Try It Out 👍
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

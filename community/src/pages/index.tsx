import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docSections = [
  {
    title: 'Start Playing',
    body: 'Joining steps, server expectations, and roleplay basics for new players.',
    to: '/docs/getting-started/joining',
  },
  {
    title: 'Build a Character',
    body: 'Character cards, bloodlines, messenger birds, and identity systems.',
    to: '/docs/roleplay/character-cards',
  },
  {
    title: 'Join the Realm',
    body: 'Kingdoms, claims, diplomacy, wars, economy, and skills.',
    to: '/docs/kingdoms/overview',
  },
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          className={styles.homepageLogo}
          src="/community/img/eldenstead-logo.png"
          alt="Eldenstead"
        />
        <p className={styles.kicker}>Community Documentation</p>
        <Heading as="h1" className={styles.heroTitle}>
          Community Docs
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/welcome">
            Open Guides
          </Link>
          <Link className="button button--secondary button--lg" href="https://discord.eldenstead.com">
            Join Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Community Docs"
      description="Player-facing community documentation for Eldenstead.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.grid}>
            {docSections.map((section) => (
              <Link className={styles.docCard} to={section.to} key={section.title}>
                <Heading as="h2">{section.title}</Heading>
                <p>{section.body}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

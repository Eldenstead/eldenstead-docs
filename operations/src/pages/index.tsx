import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const operationSections = [
  {
    title: 'Governance',
    body: 'Staff roles, authority, escalation, SOP ownership, conduct, confidentiality, and conflicts.',
    to: '/docs/Governance/GOV-001_Staff_Roles_Authority_and_Escalation',
  },
  {
    title: 'Moderation',
    body: 'Player reports, evidence, discipline, appeals, cheating, and staff misconduct procedures.',
    to: '/docs/Moderation/MOD-001_Player_Reports',
  },
  {
    title: 'Operations',
    body: 'Server restarts, maintenance, backups, incidents, lag, deployments, permissions, and disaster recovery.',
    to: '/docs/Server_Operations/OPS-001_Start_Stop_Restart_and_Console_Safety',
  },
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          className={styles.homepageLogo}
          src="/operations/img/eldenstead-logo.png"
          alt="Eldenstead"
        />
        <p className={styles.kicker}>Staff Operations</p>
        <Heading as="h1" className={styles.heroTitle}>
          Operations Manual
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/welcome">
            Open Handbook
          </Link>
          <Link className="button button--secondary button--lg" href="https://docs.eldenstead.com/community/">
            Community Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Operations Manual"
      description="Staff operations and policy manual for Eldenstead.">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.notice}>
            This site is structured for staff-only procedures and policy decisions. Keep private decisions, credentials, player evidence, and sensitive incident records outside public builds unless the deployment layer enforces staff access.
          </div>
          <div className={styles.grid}>
            {operationSections.map((section) => (
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

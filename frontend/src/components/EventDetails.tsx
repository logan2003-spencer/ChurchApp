import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails: React.FC = () => {
  return (
    <section className={styles.eventDetails}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sign Up</h1>
        <h2 className={styles.subtitle}>Event Details</h2>
      </header>
      <div className={styles.info}>
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Event Description:</h3>
          <p className={styles.sectionContent}>Details about the event</p>
        </div>
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Event Address:</h3>
          <address className={styles.sectionContent}>Address of event</address>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

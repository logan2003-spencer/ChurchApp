'use client';
import React from 'react';
import styles from './EventSignUp.module.css';
import EventDetails from './EventDetails';
import SignUpForm from './SignUpForm';

const EventSignUp: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <EventDetails />
        <SignUpForm />
      </section>
    </main>
  );
};

export default EventSignUp;

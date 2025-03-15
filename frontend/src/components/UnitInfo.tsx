import * as React from 'react';
import styles from './HomeLanding.module.css';
import { ActionButton } from './ActionButton';

export const UnitInfo: React.FC = () => {
  return (
    <section className={styles.div}>
      <h1 className={styles.unitName}>Unit Name</h1>
      <h2 className={styles.stakeName}>Stake Name</h2>
      <nav>
        <ActionButton label="Events" className={styles.btnText} to={''} />
        <ActionButton label="Attendance" className={styles.btnText} to={''}/>
        <ActionButton label="Add Event" className={styles.btnText} to={''}/>
        <ActionButton label="Ward/Stake Login" className={styles.btnText} to={''} />
      </nav>
    </section>
  );
};

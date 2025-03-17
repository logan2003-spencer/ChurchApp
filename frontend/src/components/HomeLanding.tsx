'use client';
import * as React from 'react';
import styles from './HomeLanding.module.css';
import { UnitInfo } from './UnitInfo';
import { ActionButton } from './ActionButton';

function HomeLanding() {
  return (
    <main className={styles.homeLanding}>
      <UnitInfo />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/27a12d748588e98ee3d0508c1049720aacbeab560ee95be5f64af5bc53160a4c?placeholderIfAbsent=true&apiKey=2f26542e423a48db8f08fa30244e0f6b"
        className={styles.img3}
        alt="Footer decoration"
      />
    </main>
  );
}

export default HomeLanding;

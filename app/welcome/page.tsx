import React, { FC } from 'react';
import styles from '../../styles/Welcome.module.scss';

const Welcome: FC = () => {
  return (
    <main>
      <div className={styles.welcomePage}>
        <h1>Welcome to the waitlist. Thanks for joining!</h1>
        <h2>
          Your current position is: <span>4292</span>
        </h2>

        <p>Share with others to move up the waitlist!</p>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} />
          <div className={styles.icon} />
          <div className={styles.icon} />
          <div className={styles.icon} />
          <div className={styles.icon} />
          <div className={styles.icon} />
        </div>
      </div>
    </main>
  );
};

export default Welcome;

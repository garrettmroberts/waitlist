'use client';
import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaXTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa6';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import styles from '../../styles/Welcome.module.scss';
import Link from 'next/link';

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
          <Link
            href="https://twitter.com/intent/tweet?text=I just joined the waitlist! Join me using referral code XcG43G12"
            target="_blank"
          >
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaXTwitter />
            </IconContext.Provider>
          </Link>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://google.com/"
            target="_blank"
          >
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaLinkedin />
            </IconContext.Provider>
          </Link>
          <Link
            href="https://t.me/share/url?url=http%3A//localhost%3A3000/welcome&text=I%20just%20got%20added%20to%20the%20waitlist!%20Join%20me%20using%20referral%20code%20ApD321Wsd."
            target="_blank"
          >
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaTelegram />
            </IconContext.Provider>
          </Link>
          <Link
            href="mailto:?subject=Waitlist%20Referral&body=I%20just%20got%20added%20to%20the%20waitlist!%20Join%20me%20using%20referral%20code%20ApD321Wsd."
            target="_blank"
          >
            <IconContext.Provider value={{ className: styles.icon }}>
              <FiMail />
            </IconContext.Provider>
          </Link>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/welcome"
            target="_blank"
          >
            <IconContext.Provider value={{ className: styles.icon }}>
              <BsFacebook />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Welcome;

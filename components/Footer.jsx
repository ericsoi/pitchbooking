import Image from 'next/image';
// import styles from '@Featured.module.css';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image className={styles.img} src="/img/logo.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            IT'S ALL ABOUT FOOTBALL
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR BRANCHES</h1>
          <p className={styles.text}>
            000 Road A
            <br /> Rwanda , 101010
            <br /> (254) 123-456-789
          </p>
          <p className={styles.text}>
            000 Road A
            <br /> Rwanda , 101010
            <br /> (254) 123-456-789
          </p>
          <p className={styles.text}>
            000 Road A
            <br /> Rwanda , 101010
            <br /> (254) 123-456-789
          </p>
          <p className={styles.text}>
            000 Road A
            <br /> Rwanda , 101010
            <br /> (254) 123-456-789
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPEN HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 6:30 – 21:31
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

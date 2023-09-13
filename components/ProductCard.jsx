import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
// import FsLightbox from "fslightbox-react";
import { useState } from 'react';

const ProductCard = (props) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className={styles.container}  onClick={() => setToggler(!toggler)}>
        <Image className={styles.roundedImageContainer} src={props.image} alt="" width="500" height="500" />
        {/* <h1 className={styles.title}>Product</h1> */}
        
        {/* <span className={styles.price}>$19.90</span> */}
        <p className={styles.desc}>
          {props.desc}
        </p>
      </div>
      {/* <FsLightbox
        toggler={toggler}
        sources={[
          '/img/IMG-20230829-WA0001.jpg',
          '/img/IMG-20230829-WA0002.jpg',
          '/img/IMG-20230829-WA0003.jpg',
          '/img/IMG-20230829-WA0004.jpg',
        ]}
      /> */}
  </>
    
  );
};

export default ProductCard;

import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';
import VideoPlayer from './VideoPlayer';
import { Image } from 'antd';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>You are in good hands</h1>
      <p className={styles.desc}>
        At San Siro, we&apos;re passionate about bringing sports enthusiasts together and making the process of booking pitches seamless and enjoyable. Whether you&apos;re a football fanatic, or someone who enjoys a friendly games on the stands, we&apos;ve got you covered.
      </p>
      <VideoPlayer />
        <Image.PreviewGroup
            preview={{
              onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
          <div className={styles.wrapper}>
            <Image width={300} height={350} className={styles.roundedImageContainer} src="/img/IMG-20230829-WA0001.jpg" />
            <Image width={300} height={350} className={styles.roundedImageContainer} src="/img/IMG-20230829-WA0002.jpg" />
            <Image width={300} height={350} className={styles.roundedImageContainer} src="/img/IMG-20230829-WA0003.jpg" />
            <Image width={300} height={350} className={styles.roundedImageContainer} src="/img/IMG-20230829-WA0004.jpg" />
          </div>
        </Image.PreviewGroup>
    </div>
  );
};
// "/img/IMG-20230829-WA0001.jpg"
export default ProductList;

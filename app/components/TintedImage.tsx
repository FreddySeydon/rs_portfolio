import React from 'react'
import styles from './About.module.css';
import Image from 'next/image';

type TintedImageProps = {
    imageSource: any;
    altText?: string;
  }

const TintedImage: React.FC<TintedImageProps> = ({imageSource, altText}) => {
  return (
    <div className={styles.tintedImageWrapper}>
      <Image src={imageSource} alt={altText || 'Image'} />
    </div>
  )
}

export default TintedImage

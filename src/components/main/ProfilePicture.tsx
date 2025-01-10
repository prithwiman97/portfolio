import React, { useState } from "react";
import styles from "./ProfilePicture.module.css";

interface ProfilePictureProps {
  src: string;
}

export const ProfilePicture = (props: ProfilePictureProps) => {
  const { src } = props;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const onImageClick = () => {
    setIsOverlayOpen(true);
  };
  const onCloseButtonClick = () => {
    setIsOverlayOpen(false);
  };
  return (
    <div className={styles.viewableImage}>
      <div className={styles.imageContainer} onClick={onImageClick}>
        <img src={src} />
      </div>
      <div
        className={`${styles.imageOverlay} ${
          isOverlayOpen ? styles.imageOverlayOpen : ""
        }`}
      >
        {isOverlayOpen && (
          <button
            className={styles.imageOverlayCloseBtn}
            onClick={onCloseButtonClick}
          >
            &times;
          </button>
        )}
        <img src={src} />
      </div>
    </div>
  );
};

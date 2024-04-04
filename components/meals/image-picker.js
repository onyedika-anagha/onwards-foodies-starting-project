"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name, inputId = "image" }) {
  const [imagePicked, setImagePicked] = useState(null);
  const imageInputRef = useRef();
  const handlePickClicked = () => {
      imageInputRef.current.click();
    },
    handleImageChange = (e) => {
      const file = e.target.files[0];

      if (!file) return;

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePicked(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    };
  return (
    <div className={classes.picker}>
      <label htmlFor={inputId}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicked ? (
            <p>No Image picked yet</p>
          ) : (
            <Image
              fill
              src={imagePicked}
              alt="The Image selected by the user"
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={inputId}
          ref={imageInputRef}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClicked}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;

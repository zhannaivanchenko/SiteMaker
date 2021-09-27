import React, { useState } from "react";
// import "./ProfileImages";
import { ProfileImages } from "./ProfileImages";
import "../../App.scss";
import { ProfileImagesContent } from "./ProfileImagesContent";

export function ProfileImagesContainer(props) {
   const checkImagesLength = (imagesToShow) => {
     if (imagesToShow.length > 12) {
       return true;
     }
     return false;
   };

    const getFilteredImages = (activeFilter) => {
    let selectedImages;
    console.log("profile images=", ProfileImages);
    console.log("activeFilter=",activeFilter);
    if (activeFilter === "ALL") {
      selectedImages = [...ProfileImages];
      console.log('selectedImages clicked on ALL=', selectedImages);
    } else {
      console.log("profile images=", ProfileImages);
      console.log("activeFilter=", activeFilter);

        selectedImages = ProfileImages.filter((image) => image.category === activeFilter );

      console.log("selectedImages clicked on other active filter=", selectedImages);
      console.log("profile images=", ProfileImages);
    }
    if (checkImagesLength(selectedImages)) {
        const selectedImagesLength = selectedImages.length;
        selectedImages.splice(12, selectedImagesLength);
        console.log("selectedImages after splice=", selectedImages);
    }
    console.log("selectedImages final=", selectedImages);
    return selectedImages;
  };

 

  return (
    <div className="container-fluid d-flex justify-contennt-center mt-5 mx-0 no-gutters">
      <ProfileImagesContent
        getFilteredImages={getFilteredImages}
        checkImagesLength={checkImagesLength}
        activeFilter={props.activeFilter}
      />
    </div>
  );
}

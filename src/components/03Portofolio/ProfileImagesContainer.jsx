import React from 'react';
// import "./ProfileImages";
import { ProfileImages } from './ProfileImages';
import '../../App.scss';
import { ProfileImagesContent } from './ProfileImagesContent';

export function ProfileImagesContainer(props) {
    const checkImagesLength = (imagesToShow) => {
        if (imagesToShow.length > 12) {
            return true;
        }
        return false;
    };

    const getFilteredImages = (activeFilter) => {
        let selectedImages;
        if (activeFilter === 'ALL') {
            selectedImages = [...ProfileImages];
        } else {
            selectedImages = ProfileImages.filter(
                (image) => image.category === activeFilter
            );
        }
        if (checkImagesLength(selectedImages)) {
            const selectedImagesLength = selectedImages.length;
            selectedImages.splice(12, selectedImagesLength);
        }
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

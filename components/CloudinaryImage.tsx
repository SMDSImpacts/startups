'use client'
import React from 'react';
import {CldImage} from "next-cloudinary";

const CloudinaryImage = ({image}:{image:string}) => {
    return (
        <CldImage
            alt="placeholder"
            width={100}
            height={100}
            src={image}
            className="p-4 rounded-3xl w-full h-70 sm:h-55 md:h-60 object-cover'"
        />
    );
};

export default CloudinaryImage;
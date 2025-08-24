'use client'
import React from 'react';
import {CldImage} from "next-cloudinary";

const CloudinaryImage = ({image}:{image:string}) => {
    return (
        <CldImage
            alt="placeholder"
            width={200}
            height={200}
            src={image}
            className="h-auto w-auto p-4 rounded-3xl"
        />
    );
};

export default CloudinaryImage;
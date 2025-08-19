'use client'
import React from 'react';
import {CldImage} from "next-cloudinary";

const CloudinaryImage = () => {
    return (
        <CldImage
            alt="placeholder"
            width={200}
            height={200}
            src="https://res.cloudinary.com/smdsimages/image/upload/v1755625986/code-unsplash_u5t665.jpg"
            className="h-auto w-auto p-4 rounded-3xl"
        />
    );
};

export default CloudinaryImage;
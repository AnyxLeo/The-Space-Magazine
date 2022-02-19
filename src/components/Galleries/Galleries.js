import React, { useState, useEffect } from "react";
import "./Galleries.css";
import { galleriesPreviews } from '../../Utilities/Data/GalleriesData';
import GalleryPreview from './GalleryPreview/GalleryPreview';

const Galleries = () => {
    const [galleryPreviews, setGalleryPreviews] = useState([]);

    useEffect(() => {
        let briefInfos = [];
        galleriesPreviews.forEach((x) => {
            if (x.title !== "") {
                briefInfos.push(<GalleryPreview
                    title={x.title}
                    imageUrl={x.imageUrl}
                    text={x.text}
                    nav={x.nav}
                />);
            }
        });

        setGalleryPreviews(briefInfos);
    }, []);

    return (
        <div className="galleries">
            <div className="content">
                <h1>The Space Galleries</h1>
                <div className="container">
                    {galleryPreviews}
                </div>
            </div>
        </div>
    );
};

export default Galleries;
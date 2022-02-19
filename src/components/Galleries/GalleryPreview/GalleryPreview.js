import React from "react";
import "./GalleryPreview.css";
import { Link } from "react-router-dom";

const GalleryPreview = (props) => {
    return (
        <figure>
            <strong>{props.title}</strong>
            <Link to={props.nav} >
                <img src={props.imageUrl} className="editor-image" alt={props.title} />
            </Link>
            <figcaption>
               {props.text}
            </figcaption>
        </figure>

    );
};

export default GalleryPreview;
import React, { useState, useEffect } from "react";
import "./TodaysImageSection.css";
import { ApiKey } from "../../Utilities/Data/ApiKey";
import moment from "moment";
import { Link } from "react-router-dom";

const EditorSection = () => {
    const todayImageUrl = `https://api.nasa.gov/planetary/apod?date=${moment().format(
        "YYYY-MM-DD"
    )}&api_key=${ApiKey}`;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [todaysImage, setTodaysImage] = useState([]);
    const [isVideo, setIsVideo] = useState(null);

    useEffect(() => {
        fetch(todayImageUrl)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTodaysImage(data);
                    setIsVideo(data.media_type === "video");
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="todays-image-section">
                <div className="content">
                    <h1>Astronomy Picture of the Day</h1>
                    <div>
                        {isVideo && (
                            <iframe
                                className="today-image"
                                src={todaysImage.url}
                                title="The Video"
                            ></iframe>
                        )}
                        {!isVideo && (
                            <img src={todaysImage.url} className="today-image" alt="Space" />
                        )}
                        <h2>{todaysImage.title}</h2>
                        {todaysImage.explanation}
                        <div>
                            <Link to="/Galleries">
                                <button className="button-see-more">
                                    See More ...
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditorSection;

import React, { useState, useEffect } from "react";
import "./TrendingSection.css";
import BriefInfo from "../BriefInfo/BriefInfo";
import { briefCategories } from "../../Utilities/Data/ForecastData";

const TrendingSection = () => {
    const categoriesUrl = `https://eonet.gsfc.nasa.gov/api/v2.1/categories`;
    const eventUrl = (categoryId) =>
        `https://eonet.gsfc.nasa.gov/api/v2.1/categories/${categoryId}?limit=1`;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [eventCategories, setEventCategories] = useState([]);
    const [trendingEvents, setTrendingEvents] = useState([]);
    const [briefInfos, setBriefInfos] = useState(null);

    useEffect(() => {
        fetch(categoriesUrl)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setEventCategories(data.categories);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        if (eventCategories.length <= 0) return;

        let promises = [];
        let lastEvents = [];

        eventCategories.forEach((x) => {
            let briefCategory = briefCategories.find((y) => y.categoryId === x.id);
            if (briefCategory !== undefined) {
                lastEvents.push({
                    categoryId: x.id,
                    description: x.description,
                    title: null,
                    type: x.title,
                    imageUrl: briefCategory.imageUrl,
                });
            }
        });

        lastEvents.forEach((event) => {
          var promise = fetch(eventUrl(event.categoryId))
            .then((response) => response.json())
            .then((result) => event.title = result.events.length > 0 ? result.events[0].title : '');
          promises.push(promise);
        });

        Promise.all(promises).then(() => {
            setTrendingEvents(lastEvents);
        });

    }, [eventCategories]);

    useEffect(() => {
        if (trendingEvents.length <= 0) return;

        let briefInfos = [];
        trendingEvents.forEach((x) => {
            if(x.title !== "")
            {
                    briefInfos.push(<BriefInfo
                        title={x.title}
                        image={x.imageUrl}
                        briefInfo={x.description}
                      />);
            }});

        setBriefInfos(briefInfos);

    }, [trendingEvents]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="trending-section">
                <div className="content">
                    <h1>Trending Topics</h1>
                    {briefInfos}
                </div>
            </div>
        );
    }
};

export default TrendingSection;

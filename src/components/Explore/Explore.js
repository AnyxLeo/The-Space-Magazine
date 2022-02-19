import React, { useEffect, useState } from 'react';
import Article from '../Article/Article'
import "./Explore.css";

const Explore = () => {
    const urlToExplore = 'https://images-api.nasa.gov/search?q=spacex';

    const [explore, setExplore] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(urlToExplore)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setExplore(data);
                    console.log('data', data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        if(explore === null)
        return;

        let exploreThis = explore.collection.items;

        let exploreArticles = [];
        exploreThis.forEach((item) => {
            exploreArticles.push(<Article
                        item={item}
                      />);
            });

            setArticles(exploreArticles);
    }, [explore]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="explore">
                <div className="content">
                    <h1>The Space X Mission</h1>
                    <div>
                        {articles}
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;
import React from 'react';
import "./Article.css";

const Article = (props) => {
    return (
        <div>
            <article>
                <header>
                    <h2>{props.item.data[0]?.title}</h2>
                </header>
                <section>
                    <img src={props.item.links[0]?.href} className="explore-image" alt={props.item.data[0]?.title} />
                    <p><label><strong>Photographer: </strong></label>{props.item.data[0]?.photographer}</p>
                    <p><label><strong>Location: </strong></label>{props.item.data[0]?.location}</p>
                    <p><label><strong>Date: </strong></label>{props.item.data[0]?.date_created}</p>
                </section>
                <section>
                    <p>{props.item.data[0]?.description}</p>
                </section>
            </article>
        </div>
    );
}

export default Article;
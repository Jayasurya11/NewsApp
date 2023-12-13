import React from "react";
import Not_Available from "./image/not-available.jpg";
const News = ({ news }) => {
  return (
    <div className="each-news">
      {news.urlToImage ? (
        <img src={news.urlToImage} alt="" />
      ) : (
        <img src={Not_Available} alt="" />
      )}
      <h5>{news.title}</h5>

      <p>
        {news.description ? news.description.substring(0, 100) + "..." : null}
        <a href={news.url} target="_blank">
          Read More..
        </a>
        <div className="author">
          <p>From: {news.source.name}</p>
          <p>--{news.author}</p>
        </div>
      </p>
    </div>
  );
};

export default News;

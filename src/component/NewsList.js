import React, { Component } from "react";
import News from "./News";
import "../style/NewsList.css";

const NewsList = ({ news }) => {
  return (
    <div className="newslist">
      {news.map((item, i) => {
        const {
          title,
          author,
          content,
          publishedAt,
          source,
          description,
          url,
          urlToImage,
        } = item;
        return (
          <News
            key={i}
            title={title}
            author={author}
            content={content}
            publis={publishedAt}
            source={source.name}
            desc={description}
            url={url}
            img={urlToImage}
          />
        );
      })}
    </div>
  );
};
export default NewsList;

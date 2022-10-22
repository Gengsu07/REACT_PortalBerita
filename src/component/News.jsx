import React from "react";
import "../style/News.css";
import "react-router";

const News = (props) => {
  return (
    <div className={`news-${props.source}`} id="newscard">
      <img src={props.img} alt={props.title}></img>
      <a href={props.url}>
        {" "}
        <h3>{props.title}</h3>
      </a>
      <p>{props.content}</p>
    </div>
  );
};
export default News;

import React from "react";

const NewsListItem = props => {
  return (
    <li>
      <h4>{props.item.title}</h4>
      <p>{props.item.feed}</p>
    </li>
  );
};

export default NewsListItem;

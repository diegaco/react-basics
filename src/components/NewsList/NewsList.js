import React from "react";
import NewsListItem from "./NewsListItem";

class NewsList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.news.map(item => {
          return <NewsListItem key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}

export default NewsList;

import React from "react";

const NewsContext = React.createContext({
  news: [],
  filteredNews: [],
  getKeywords: () => {}
});

export default NewsContext;

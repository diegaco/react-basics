import React from "react";
import NewsContext from "../../context";

// Components
import Header from "../../components/HeaderSearch";
import Footer from "../../components/Footer";
import NewsListItem from "../../components/NewsList/NewsListItem";

const { Consumer } = NewsContext;

const newslist = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Consumer>
          {({ news, filteredNews }) => {
            news = filteredNews.length ? filteredNews : news;

            return (
              <ul className="list-unstyled">
                {news.map(item => {
                  return <NewsListItem key={item.id} item={item} />;
                })}
              </ul>
            );
          }}
        </Consumer>
      </main>
      <Footer />
    </div>
  );
};

export default newslist;

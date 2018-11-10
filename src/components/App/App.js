import React, { Component } from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import NewsList from "../NewsList";
import JSON from "../../db.json";

class App extends Component {
  state = {
    news: JSON,
    filteredNews: []
  };

  getKeywords = ev => {
    let sanitizeKeyword = ev.target.value.toLowerCase().trim();
    let filteredNews = this.state.news.filter(
      item =>
        item.feed.toLowerCase().indexOf(sanitizeKeyword) !== -1 ||
        item.title.toLowerCase().indexOf(sanitizeKeyword) !== -1
    );
    this.setState({
      filteredNews
    });
  };

  render() {
    return (
      <div className="App">
        <Header keywords={this.getKeywords} />
        <main>
          <div className="container">
            <NewsList
              news={
                this.state.filteredNews.length
                  ? this.state.filteredNews
                  : this.state.news
              }
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

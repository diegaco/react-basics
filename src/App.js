import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import NewsContext from "./context";

// Data
import JSON from "./db.json";

const { Provider } = NewsContext;

class App extends Component {
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

  state = {
    news: JSON,
    filteredNews: [],
    getKeywords: this.getKeywords
  };

  render() {
    return (
      <Provider value={this.state}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;

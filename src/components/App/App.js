import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Route Components

// Components
import Header from "../Header";
import Footer from "../Footer";
// import NewsList from "../NewsList";

// Data
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
          {/* <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </BrowserRouter> */}

          {/* <NewsList
            news={
              this.state.filteredNews.length
                ? this.state.filteredNews
                : this.state.news
            }
          /> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

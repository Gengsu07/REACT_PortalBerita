import "./App.css";
import logo from "./assets/newstoday.png";
import React, { Component } from "react";
import NewsList from "./component/NewsList";
import DropdownCategory from "./component/Dropdown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      newsapi: {
        url: "https://newsapi.org/v2/top-headlines?country=id&",
        api: "apiKey=52e1e2f67bfc41ccbe0b27bc7be93c03",
        category: "",
      },
    };
  }
  componentDidMount() {
    let completeurl =
      this.state.newsapi.url +
      this.state.newsapi.category +
      this.state.newsapi.api;
    fetch(completeurl)
      .then((resp) => resp.json())
      .then((item) => this.setState({ news: item.articles }));
  }
  onChange = (e) => {
    console.log(e.value);
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 style={{ textAlign: "center" }}>Portal Berita Masa Kini</h1>
          {/* <div className="selector">
            <DropdownCategory change={this.onChange} />
          </div> */}
        </div>

        <NewsList news={this.state.news} />
        {/* {console.log(this.state.news)} */}
        {/* {JSON.stringify(articles)} */}
      </div>
    );
  }
}
export default App;

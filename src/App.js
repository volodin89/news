import React, { Component } from "react";
import Search from "./components/search";
import Choise from "./components/choise";
import News from "./components/news";

const API_KEY = "39c9d5b528aa4be08c46be9f4fdabbb4";

export default class App extends Component {
  state = {
    articles: [],
    choise: ""
  };

  getNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles });
        console.log("app1", this.state);
      });
  }

  render() {
    console.log('app2', this.state);
    
    return (
      <div>
        <Search />
        <Choise data={this.state.articles}/>
        <News news={this.state.articles}/>
        <div>
          {this.state.articles.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.title}</h2>
                <b>{item.author}</b>
                <img src={item.urlToImage} style={{width: "50vw"}}/>
                <a href={item.url}>Читать полностью</a>
                <p>
                  {item.description}
                </p>
              </div>
            );
          })}
          }
        </div>
      </div>
    );
  }
}

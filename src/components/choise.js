import React, { Component } from "react";

export default class Choise extends Component {

  handleClick= event => {
    this.props.fetchData(event.target.name);
    this.props.toggleLoading();
  };

  render() {
    return (
      <div>
        <form>
          <button value="&category=business"
            onClick={this.gettingNews}
          >
            Новости бизнеса
          </button>
          <button
            onClick={() => {
              this.props.updateData("&category=entertainment");
            }}
          >
            Развлечения
          </button>
          <button
            onClick={() => {
              this.props.updateData("&category=health");
            }}
          >
            Здоровье
          </button>
          <button
            onClick={() => {
              this.props.updateData("&category=science");
            }}
          >
            Наука
          </button>
          <button
            onClick={() => {
              this.props.updateData("&category=sports");
            }}
          >
            Спорт
          </button>
          <button
            onClick={() => {
              this.props.updateData("&category=technology");
            }}
          >
            Технологии
          </button>
        </form>
      </div>
    );
  }
}

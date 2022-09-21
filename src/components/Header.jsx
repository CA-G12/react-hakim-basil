import { Component } from "react"

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>showHub</h1>
        <ul>
          <li>anime</li>
          <li>contact</li>
          <li>about us</li>
        </ul>
        <div className="search">
          <input type='text' placeHolder='search' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='btns'>
          <button id="login">login</button>
          <button>sign up</button>
        </div>
      </header>
    );
  }
}
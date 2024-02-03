import { Component } from 'react'
import '../css/HomeComponent.css'
import React from 'react'
import { Link } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <div id='div-container'>
        <h1 style={{color:'#fff'}}>Quiz App</h1>
        <Link to='/quiz'><button id="play">Play</button></Link>
      </div>
    )
  }
}
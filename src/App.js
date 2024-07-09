import React, { Component } from 'react'
import BasicInfo from './component/BasicInfo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Lourdes Villa",
        number: "123-123-5678",
        dateOfBirth: "05-04-1998"
      }
    };
  }
  render() {
    return (
      <BasicInfo person={this.state.person}/>
    )
  }
}

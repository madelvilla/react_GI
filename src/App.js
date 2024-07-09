import React, { Component } from 'react'
import BasicInfo from './component/BasicInfo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Lourdes Villa",
          number: "123-123-5678",
          dateOfBirth: "05-04-1998"
        },
        {
          name: "Joe Smith",
          number: "123-123-1231",
          dateOfBirth: "03-04-1398"
        },
        {
          name: "Zuko Solis",
          number: "123-123-140",
          dateOfBirth: "12-24-2022"
        },
      ],
    };
  }
  render() {
    return (
      <BasicInfo contacts={this.state.contacts}/>
    )
  }
}

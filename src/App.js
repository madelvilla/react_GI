import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {person: {}};
  }
  render() {
    return (
      <div>
        Hello, my name is Lourdes Villa. My phone number is 123-123-5678. I was born May 4, 1998. 
      </div>
    )
  }
}

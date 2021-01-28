import {Component} from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'date': new Date().toLocaleTimeString()
    }
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
      </div>
    )
  }
}
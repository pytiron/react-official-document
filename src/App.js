import {Component} from 'react'
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState((state, props) => ({
      increment: state.increment + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <Welcome name="june" />
        <h1>Hello, World</h1>
        <Comment date={comment.date} text={comment.text} author={comment.author} />
        <Clock />
        <Counter increment={this.state.increment} />
      </div>
    )
  }
}

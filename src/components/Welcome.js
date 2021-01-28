import {Component} from 'react'

export default function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}
// 위동
// class Welcome extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
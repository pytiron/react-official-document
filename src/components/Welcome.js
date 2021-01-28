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


// 이전까지는 React 요소를 DOM 태그로 나타냈는데
// const element = <div />
// React 요소는 사용자 정의 컴포넌트로도 나타낼 수 있다.
// const element = <Welcome name="Samanda" />
// React 가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 속성과 자식을 해당 컴포넌트에
// 단일 객체로 전달합니다. 이 객체를 "props"라고 합니다. props:{ className: "apache" , "onChange":"handleChange", ...}

// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
// 1. <Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출합니다.
// 2. React는 {name : 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출합니다.
// 3. Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환합니다.
// 4. React DOM은 <h1>Helllo, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트 합니다.
// 컴포넌트 이름은 항상 대문자로 시작함.
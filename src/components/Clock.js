import {Component} from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'date': new Date().toLocaleTimeString()
    }
  }

  // 컴포넌트 출력물이 DOM에 렌더링 된 후 에 실행됩니다.
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
      </div>
    )
  }
}


// 1. 생성자 호출하여 state 초기화
// 2. render() 호출하여 DOM 노드들 생성/업데이트
// 3. componentDidMount() 생명주기 메서드 호출
// 4. setState 에 의한 변경 추적으로 render() 재호출/업데이트
// 5. 컴포넌트 DOM으로부터 한 번이라도 삭제된 적이 있다면 componentWillUnmount() 생명주기 메서드 호출

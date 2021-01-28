import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function formatDate(date) {
  return date.toLocaleDateString();
}

// 매개변수에 대해서 순수함수처럼 동작해야한다는 법칙을 갖고 있다.
export default function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
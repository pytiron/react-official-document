// 쪼개는걸 겁내지 마세요. 아바타 컴포넌트 관점에서, 작성자(author)중요하지 않다.
// 따라서 사용자(user)라고 props 사용
export default function Avatar(props){
  return(
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  )
}
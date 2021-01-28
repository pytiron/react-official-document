import Welcome from "./components/Welcome";
import Comment from "./components/Comment";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      <Welcome name="june" />
      <h1>Hello, World</h1>
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
    </div>
  );
}

export default App;

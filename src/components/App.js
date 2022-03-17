import video from "../data/video.js";
import Header from "./Header"
import Main from "./Main"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} />
      <Main upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments} />
    </div>
  );
}

export default App;

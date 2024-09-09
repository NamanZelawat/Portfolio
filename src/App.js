import "./App.css";

function App() {
  return (
    // <div className="app">
    //   <div className="text-wrapper">
    //     <h1>Naman Zelawat</h1>
    //     <h4>Links.</h4>
    //     <button>Do not click!!</button>
    //   </div>
    // </div>
    <div className="video-container">
      <video
        className="full-screen-video"
        src={`${process.env.PUBLIC_URL}/test.mp4`}
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
}

export default App;

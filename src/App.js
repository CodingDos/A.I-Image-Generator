import './App.css'
import ImageGenerator from './Containers/ImageGenerator.jsx'
import BackgroundVideo from './Containers/BackgroundVideo/video (1080p).mp4'
import NavBar from './Containers/NavBar/NavBar.jsx'

function App() {
  return (
    <div className="App">
      {/* <div className="NavBar-main"> */}
        <NavBar />
      {/* </div> */}
      <div>
        <video src={BackgroundVideo} autoPlay loop muted />
      </div>  
      {/* <div className="ImageGenMain"> */}
        {/* <video src={BackgroundVideo} autoPlay loop muted /> */}
        <ImageGenerator/>
      {/* </div> */}
    </div>
  );
}

export default App;

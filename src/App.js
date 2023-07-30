import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LyricsScreen from "./pages/LyricsScreen";

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/lyricsscreen" element={<LyricsScreen/>} />

        </Routes>
      </div>


    </Router>
  );
}

export default App;
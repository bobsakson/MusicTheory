import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/home";
import MajorKey from "./majorkey/majorkey";
import Quiz from "./quiz/quiz"
import "./App.css";
import ApplicationDrawer from "./applicationDrawer/applicationDrawer";

function App() {
  return (
    // <Router>
    //   <div>
    //     {/* <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/majorkey">Major Key</Link>
    //       </li>
    //       <li>
    //         <Link to="/quiz">Quiz</Link>
    //       </li>
    //     </ul> */}
    //     <ApplicationDrawer />
    //     <Routes>
    //       <Route path="/majorkey" element={<MajorKey/>}/>
    //       <Route path="/quiz" element={<Quiz/>}/>
    //       <Route path="/" element={<Home/>}/>
    //     </Routes>
    //   </div>
    // </Router>
      <div>
        <ApplicationDrawer />
      </div>
  );
}

export default App;

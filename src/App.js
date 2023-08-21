
import { useContext } from "react";
import Home from "../src/components/pages/home/Home";
import TopBar from "../src/components/topbar/TopBar";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
//react router dom
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context)
  return (
   <Router>
      <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path="/register" element={ user ? <Home/> : <Register/>}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={user ? <Home/> :<Login/>}></Route>
        </Routes>
        <Routes>
          <Route path="/write" element={user?<Write/>:<Register/>}></Route>
        </Routes>
        <Routes>
          <Route path="/settings" element={user ?<Settings/> :<Register/> }></Route>
        </Routes>
        <Routes>
          <Route path="/post/:postId" element={<Single/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;

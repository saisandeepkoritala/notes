import SideBar from "./components/SideBar";
import Route from "./components/Route";
import Home from "./components/Home";
import Login from "./components/Login";
import Support from "./components/Support";
import Logout from "./components/Logout";
import Cart from "./components/Cart";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="navbar">
      <div className="sidebar">
        <SideBar/>
      </div>
      <div className="allroutes">
        <Route path="/">
          <Landing/>
        </Route>
        <Route path="/Home">
            <Home/>
        </Route>
        <Route path="/Login">
            <Login/>
        </Route>
        <Route path="/Support">
            <Support/>
        </Route>
        <Route path="/Logout">
            <Logout/>
        </Route>
        <Route path="/Cart">
            <Cart/>
        </Route>
      </div>
    </div>
  )
}

export default App;

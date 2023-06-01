
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skin from './components/Skin';
import Body from './components/Body';
import Hair from './components/Hair';
import Fragnance from './components/Fragnance';
import Travel from './components/Travel';
import Gifts from './components/Gifts';
import Read from './components/Read';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/internship"  element={<Home/>}></Route>
        <Route path="/internship/skin"  element={<Skin/>}></Route>
        <Route path="/internship/body"  element={<Body/>}></Route>
        <Route path="/internship/hair"  element={<Hair/>}></Route>
        <Route path="/internship/fragnance"  element={<Fragnance/>}></Route>
        <Route path="/internship/travel"  element={<Travel/>}></Route>
        <Route path="/internship/gifts"  element={<Gifts/>}></Route>
        <Route path="/internship/read"  element={<Read/>}></Route>
        <Route path="/internship/cart"  element={<Cart/>}></Route>
        <Route path="/internship/login"  element={<Login/>}></Route>
        <Route path="/internship/register"  element={<Register/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

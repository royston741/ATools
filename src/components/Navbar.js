// Component 
import NavBtn from "./NavBtn";

// CSS 
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1 className="logo">ATools <span>.</span></h1>
      <div className="nav_btns">
        <NavBtn addClass="free_trial_btn">Start Free Trial</NavBtn>
        <NavBtn addClass="login_btn">Login</NavBtn>
      </div>
    </nav>
  );
}

export default Navbar;

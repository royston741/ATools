import './NavBtn.css'

function NavBtn(props) {
  return <button className={`nav_btn ${props.addClass}`}>{props.children}</button>;
}

export default NavBtn;

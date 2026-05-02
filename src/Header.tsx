import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <header className="header__header">

      <div className="header__left">
        <h1>
          <Link to="/">MyBlog</Link>
        </h1>

        <nav className="header__nav-left">
          <Link to="/">Posts</Link>
        </nav>
      </div>

      <nav className="header__right">
        <Link to="/about">About</Link>
      </nav>

    </header>
  )
}

export default Header;

import { useState} from "react"
import { Link } from "react-router-dom"
import './Header.css'

function Header() {

  const [open, setOpen] = useState(false)

  const posts = [
    {id: 1, title: "my first post"},
    {id: 2, title: "my second post"},
    {id: 3, title: "my third post"}
  ]

  return (
    <header className="header__header">

      <div className="header__left">
        <h1>
          <Link to="/">MyBlog</Link>
        </h1>

        <nav className="header__nav-left">
          <div
            className="dropdown-container"
            onClick={() => setOpen(!open)}
          >

            <span>Posts</span>


          </div>


        </nav>

      </div>

      <nav className="header__right">
        <Link to="/about">About</Link>
      </nav>

    </header>
  )
}

export default Header;

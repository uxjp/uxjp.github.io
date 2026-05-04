import { useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'

function Header() {

  const [open, setOpen] = useState(false)

  const posts = [
    { id: 1, title: "my first post" },
    { id: 2, title: "my second post" },
    { id: 3, title: "my third post" }
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
            Posts
            {open && (
              <div
                className="dropdown-box"
                onClick={(e) => e.stopPropagation()}
              >
                <li> hello 1</li>
                <li> hello 2</li>
                <li> hello 3</li>
                <li> hello 4</li>
                <li> hello 5</li>
                <li> hello 6</li>
                <li> hello 7</li>
                <li> hello 8</li>
                <li> hello 9</li>
                <li> hello 10</li>
                <li> hello 11</li>
                <li> hello 12</li>
                <li> hello 1</li>
                <li> hello 2</li>
                <li> hello 3</li>
                <li> hello 4</li>
                <li> hello 5</li>
                <li> hello 6</li>
                <li> hello 7</li>
                <li> hello 8</li>
                <li> hello 9</li>
                <li> hello 10</li>
                <li> hello 11</li>
                <li> hello 12</li>

              </div>
            )}
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

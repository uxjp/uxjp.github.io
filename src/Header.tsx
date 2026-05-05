import { useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'

function Header() {

  const [open, setOpen] = useState(false)


  const posts = [...Array(30).keys()].map(
      i => ({
         id: i + 1,
         title:  `my ${i} th post`
      })
  )

  const posts2 = [
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
                <ul>
                  {posts2.map(
                    post => (
                      <li
                          onClick={() => setOpen(!open)}
                      >
                        <Link to="About">
                          Post {post.id} name: {post.title}
                        </Link>
                      </li>
                    )
                  )
                  }

                </ul>

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

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import './Header.css'

function Header() {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  const posts2 = [
    { id: 1, title: "my first post", url: "/Post1"},
    { id: 2, title: "my second post", url: "/Post2"},
    { id: 3, title: "my third post", url: "/Post3" }
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="header__header">

      <div className="header__left">
        <div className="header__title">
          <Link to="/">How do you think ?</Link>
        </div>

        <nav className="header__nav-left">
          <div
            className="dropdown-container"
            ref={dropdownRef}
            onClick={() => setOpen(!open)}
          >
            Posts
            {open && (
              <div
                className="dropdown-box"
                onClick={(e) => e.stopPropagation()}
              >
                <ul
                  className="dropdown-list"
                >
                  {posts2.map(
                    post => {

                      const linkPath = post.url
                      const isActive = location.pathname === linkPath

                      return (
                        <li
                            key={post.id}
                            className="dropdown-item"
                            onClick={() => setOpen(false)}
                        >
                          <Link
                              to={linkPath}
                              className={`dropdown-link ${isActive ? 'active' : ''}`}
                          >
                            {post.title}
                          </Link>
                        </li>
                      )
                   }

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

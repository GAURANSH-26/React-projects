import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="logo"><h1>BookStore</h1></div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

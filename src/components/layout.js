import React from "react"
import { Link } from "gatsby"

const Layout = ({children}) => {
  const linkStyle = `
  hover:opacity-70 
  text-sm 
  sm:text-lg
  `
  const logoStyle= `
  text-white
  font-rammetto
  sm:text-base
  text-sm
  `
  return (
    <div>
      <nav className="flex sm:justify-between justify-around items-center bg-green-900 lg:px-20 sm:px-6 py-8 text-gray-100">
        <h3 className={logoStyle}>AretanetBlog</h3>
        <ul className="flex space-x-4">
          <li className={linkStyle}><Link to="/">Home</Link></li>
          <li className={linkStyle}><Link to="/contact">Contact</Link></li>
          <li className={linkStyle}><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <main>{children}</main>
      
      <footer className="bg-green-900 text-gray-100 py-8 text-center mt-8">
      <p>Copyright 2024 <span className={logoStyle}>AretanetBlog</span></p>
      </footer>
    </div>
  )
}

export default Layout
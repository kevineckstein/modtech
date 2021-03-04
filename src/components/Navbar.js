import React from "react"
import { Link } from "gatsby"
import img from "../../static/logo.svg"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full h-12 bg-white md:h-20">
      <header className="m-auto md:p-2">
        <div className="container flex flex-row flex-wrap items-end px-1 py-3 m-auto md:p-3">
          <nav className="flex flex-wrap justify-between w-full">
            <Link className="block w-32 h-auto md:w-52" to="/">
              <img
                src={img}
                alt="modern tech logo"
                height="300px"
                width="500px"
                className="overflow-visible"
              />
            </Link>
            <PageLinks styleClass="flex font-subHeading" />
          </nav>
        </div>
      </header>
    </nav>
  )
}

export default Navbar

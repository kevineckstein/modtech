import React from "react"
import { Link } from "gatsby"
import img from "../../static/logo.svg"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container flex flex-col items-center px-6 py-8 mx-auto sm:flex-row">
        <Link className="block w-3/5 md:w-52" to="/">
          <img
            src={img}
            alt="modern tech logo"
            height="300px"
            width="500px"
            className="mx-auto overflow-visible"
          />
        </Link>
        <div className="mt-4 text-sm text-center text-gray-800 sm:ml-4 sm:px-4 sm:text-left sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          <p>Copyright &#169; 2021</p>
          <p>All Rights Reserved By Modern Tech Ltd</p>
        </div>
        <span className="inline-flex justify-center mt-4 lg:inline-flex sm:block sm:ml-auto sm:mt-0 sm:justify-start">
          <h1 className="mx-auto ml-2 md:mb-2 lg:mb-0">Follow Us!</h1>
          <SocialLinks />
        </span>
      </div>
    </footer>
  )
}

export default Footer

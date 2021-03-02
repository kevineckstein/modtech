import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const data = [
  {
    id: 1,
    text: "Contact Us",
    url: "/contact/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li
      key={link.id}
      className="pr-4 my-auto text-xs font-medium text-black md:px-4 lg:text-xl md:text-base font-heading hover:text-secondary"
    >
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  const {
    allStrapiServices: { nodes: service },
  } = useStaticQuery(query)
  const tempServices = service.map(links => {
    return (
      <li key={links.strapiId}>
        <Link
          to={`/service/${links.url}`}
          className="block px-4 py-2 text-xs font-medium text-black rounded-md font-heading md:text-base hover:bg-gray-100 hover:text-secondary"
          role="menuitem"
        >
          {links.name}
        </Link>
      </li>
    )
  })
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      <div className="inline-block my-auto text-left md:m-auto md:relative">
        <div
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          className="service"
        >
          <button className="pb-2 pr-4 text-xs text-black cursor-pointer md:pb-0 just lg:text-xl md:text-base font-heading hover:text-secondary focus:outline-none">
            Services
          </button>
          <div className="absolute right-0 w-56 mr-4 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 services">
            <Link
              to="/"
              className="block px-4 py-2 text-xs font-medium text-black rounded-md font-heading md:text-base hover:bg-gray-100 hover:text-secondary"
            >
              I.T Services
            </Link>
            {tempServices}
          </div>
        </div>
      </div>
      {tempLinks}
    </ul>
  )
}
const query = graphql`
  {
    allStrapiServices {
      nodes {
        strapiId
        name
        url
      }
    }
  }
`

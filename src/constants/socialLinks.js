import React from "react"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaYoutubeSquare } from "@react-icons/all-files/fa/FaYoutubeSquare"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/ecksteinmodtech/",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/modtech.co.tt/",
  },
  {
    id: 3,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com/channel/UCoHWn0KFqiLR23PlyiT_BGw",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id} className="mx-2">
      <a
        href={link.url}
        className="text-2xl md:text-3xl hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`flex items-center ${styleClass ? styleClass : ""}`}>
      {links}
    </ul>
  )
}

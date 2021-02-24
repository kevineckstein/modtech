import React from "react"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"

const data = [
  {
    id: 1,
    icon: <AiFillFacebook className="social-icon"></AiFillFacebook>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <AiFillTwitterSquare className="social-icon"></AiFillTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <AiFillInstagram className="social-icon"></AiFillInstagram>,
    url: "https://www.instagram.com",
  },
  {
    id: 4,
    icon: <AiFillYoutube className="social-icon"></AiFillYoutube>,
    url: "https://www.youtube.com",
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

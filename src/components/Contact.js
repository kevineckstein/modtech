import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { GoLocation } from "@react-icons/all-files/go/GoLocation"

export default () => {
  const {
    allStrapiContact: { nodes: contact },
  } = useStaticQuery(query)
  return (
    <section className="w-full p-2 mt-8 text-center border-t border-gray-200">
      <div>
        <p className="my-2">or</p>
        <p className="inline-flex leading-normal text-indigo-500">
          <AiOutlineMail className="self-center mr-2 text-base text-gray-400 md:text-xl" />
          {contact[0].email}
        </p>
      </div>
      <div>
        <p className="inline-flex leading-normal">
          <AiOutlinePhone className="self-center mr-2 text-base text-gray-400 md:text-xl" />
          {contact[0].phone}
        </p>
      </div>
      <div>
        <p className="inline-flex leading-normal">
          <GoLocation className="self-center mr-2 text-base text-gray-400 md:text-xl" />
          {contact[0].address}
        </p>
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiContact {
      nodes {
        address
        email
        strapiId
        phone
      }
    }
  }
`

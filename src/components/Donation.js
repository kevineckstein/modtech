import React from "react"
import Title from "../components/Title"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { Link } from "gatsby"
const Donation = () => {
  return (
    <article className="py-20 bg-gradient-to-t to-blue-50 from-gray-100 ">
      <div className="container relative mx-auto -mt-20">
        <div className="p-8 mx-6 border-t-2 border-l-2 border-blue-200 rounded-2xl">
          <section className="flex flex-col items-start mx-auto sm:flex-row sm:items-center ">
            <div className="flex-grow p-6 sm:pr-16">
              <Title title="Help support Trinidad Communities By Donating!" />

              <p className="text-base text-gray-500 lg:text-lg">
                Visit our donation pages to help support various communities in
                Trinidad.
              </p>
            </div>
            <Link
              to="/Donations"
              className="inline-flex flex-shrink-0 px-6 py-2 mx-6 mt-6 text-lg text-white border-0 rounded bg-primary focus:outline-none hover:bg-secondary sm:mt-0"
            >
              Donations <AiOutlineHeart className="my-auto ml-3" />
            </Link>
          </section>
        </div>
        <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-2 -left-0"></div>
      </div>
    </article>
  )
}

export default Donation

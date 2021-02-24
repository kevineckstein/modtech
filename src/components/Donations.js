import React from "react"
import Title from "../components/Title"
const Blog = ({ donations }) => {
  return (
    <article className="min-h-screen overflow-hidden bg-gradient-to-t from-gray-100 to-blue-100">
      <div className="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-12 flex-col items-center text-center">
          <Title title="Our Donations" />
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 md:text-lg text-sm">
            Below shows our community driven donations where we seek to improve
            Trinidad and Tobago!
          </p>
        </div>
        <section className="flex-wrap lg:justify-evenly lg:flex">
          {donations.map(donation => {
            return (
              <embed
                className="w-11/12 m-4 rounded-lg shadow-lg h-52 lg:h-48 lg:w-2/5 hover:shadow-xl"
                src={donation.embeddedurl}
                type="text/html"
                key={donation.strapiId}
              ></embed>
            )
          })}
        </section>
      </div>
    </article>
  )
}

export default Blog

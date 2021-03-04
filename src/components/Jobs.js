import React from "react"
import Title from "./Title"
import Image from "gatsby-image"

const Jobs = ({ testimonials }) => {
  return (
    <article className="bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="container flex items-center justify-center mx-auto">
        <div className="relative w-full pt-20 mx-6">
          <div className="flex flex-col items-center justify-center p-8 mx-auto border-t-2 border-r-2 border-blue-200 rounded-2xl">
            <div className="absolute top-0 left-0 h-20 bg-blue-200 wid"></div>
            <div className="absolute w-12 h-12 bg-blue-200 rounded-full top-14 -left-6"></div>
            <Title title="Client's Testimonial" />
            <p className="text-center ">
              Don't take our word, hear from our clients!
            </p>
            <div className="items-center justify-center w-full mt-16 mb-4 lg:flex">
              {testimonials.map(testimonial => {
                return (
                  <section
                    className="flex flex-col items-start justify-start w-full p-6 mb-6 lg:w-1/3 lg:mb-0 h-80"
                    key={testimonial.strapiId}
                    data-sal="slide-down"
                    data-sal-duration="800"
                    data-sal-easing="ease"
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        {testimonial.image && (
                          <Image
                            fluid={testimonial.image.childImageSharp.fluid}
                            style={{ height: `64px` }}
                            alt={
                              testimonial.altText ||
                              testimonial.image.childImageSharp.fluid
                                .originalName
                            }
                          />
                        )}
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h1 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h1>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <blockquote className="mt-8 text-lg text-gray-500">
                      {testimonial.quote}
                    </blockquote>
                  </section>
                )
              })}
            </div>
            <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-6 -right-6"></div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Jobs

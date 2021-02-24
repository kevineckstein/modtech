import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
const Partners = ({ partners }) => {
  return (
    <article className="relative z-10 bg-white shadow-partner">
      <div className="container px-6 py-20 mx-auto">
        <div className="flex flex-col w-full text-center">
          <h1 className="capitalize">
            <Title title="our partners" />
          </h1>
          <p className="mb-4 text-center ">
            Here are our partners that provide modern solutions!
          </p>
        </div>
        <div
          className="flex flex-wrap w-full mx-auto whitespace-nowrap"
          id="partner"
        >
          {partners.map(logo => {
            return (
              <section
                className="inline-block p-4 mx-auto"
                key={logo.strapiId}
                data-sal="fade-in"
                data-sal-duration="800"
                data-sal-easing="ease"
              >
                <div className="items-center h-full text-center">
                  {logo.image && (
                    <Image
                      fixed={logo.image.childImageSharp.fixed}
                      alt={
                        logo.altText ||
                        logo.image.childImageSharp.fluid.originalName
                      }
                    />
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default Partners

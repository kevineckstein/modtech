import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { AiOutlinePoweroff } from "@react-icons/all-files/ai/AiOutlinePoweroff"

const Services = ({ digital, infrastructure, management }) => {
  return (
    <article className="py-20 bg-gradient-to-t to-gray-100 from-blue-100">
      <section className="container relative mx-auto">
        <div className="items-center p-8 mx-6 border-b-2 border-r-2 border-blue-200 md:flex rounded-2xl">
          <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-6 -left-0"></div>
          <div className="absolute top-0 w-12 h-12 bg-blue-200 rounded-full -right-0"></div>
          <div
            className="hidden w-full h-full px-10 mt-16 md:w-1/2 md:mt-0 md:block"
            data-sal="slide-right"
            data-sal-duration="300"
            data-sal-easing="ease"
          >
            <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-xl lg:w-4/5">
              {management[0].image && (
                <Image
                  fluid={management[0].image.childImageSharp.fluid}
                  alt={
                    management[0].altText ||
                    management[0].image.childImageSharp.fluid.originalName
                  }
                />
              )}
            </div>
          </div>
          <div className="w-full px-6 md:w-1/2 md:px-12">
            <h2 className="text-2xl font-bold text-gray-900">
              <Title title={management[0].title} />
            </h2>
            <div
              className="block w-full mt-6 md:w-1/2 md:hidden"
              data-sal="slide-right"
              data-sal-duration="300"
              data-sal-easing="ease"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                {management[0].image && (
                  <Image
                    fluid={management[0].image.childImageSharp.fluid}
                    alt={
                      management[0].altText ||
                      management[0].image.childImageSharp.fluid.originalName
                    }
                  />
                )}
              </div>
            </div>
            {management[0].type.map(service => {
              return (
                <div className="flex mt-10" key={service.id}>
                  <div className="my-auto text-xl md:text-3xl">
                    <AiOutlinePoweroff />
                  </div>
                  <div className="mt-2 ml-4">
                    <h1 className="text-base font-semibold md:text-lg">
                      {service.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-700 md:text-base">
                      {service.subTitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="container relative mx-auto">
        <div className="items-center p-8 mx-6 border-b-2 border-l-2 border-blue-200 md:flex rounded-2xl">
          <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-6 -right-0"></div>
          <div className="w-full px-6 md:w-1/2 md:px-12">
            <h2 className="text-2xl font-bold text-gray-900">
              <Title title={infrastructure[0].title} />
            </h2>
            <div
              className="block w-full mt-6 md:w-1/2 md:hidden"
              data-sal="slide-down"
              data-sal-duration="300"
              data-sal-easing="ease"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                {infrastructure[0].image && (
                  <Image
                    fluid={infrastructure[0].image.childImageSharp.fluid}
                    alt={
                      infrastructure[0].altText ||
                      infrastructure[0].image.childImageSharp.fluid.originalName
                    }
                  />
                )}
              </div>
            </div>
            {infrastructure[0].type.map(service => {
              return (
                <div className="flex mt-10" key={service.id}>
                  <div className="my-auto text-xl md:text-3xl">
                    <AiOutlinePoweroff />
                  </div>
                  <div className="mt-2 ml-4">
                    <h1 className="text-base font-semibold md:text-lg">
                      {service.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-700 md:text-base">
                      {service.subTitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div
            className="hidden w-full px-10 mt-16 md:w-1/2 md:mt-0 md:block"
            data-sal="slide-down"
            data-sal-duration="300"
            data-sal-easing="ease"
          >
            <div className="mx-auto overflow-hidden rounded-lg shadow-xl lg:w-4/5">
              {infrastructure[0].image && (
                <Image
                  fluid={infrastructure[0].image.childImageSharp.fluid}
                  alt={
                    infrastructure[0].altText ||
                    infrastructure[0].image.childImageSharp.fluid.originalName
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="container relative mx-auto">
        <div className="items-center p-8 mx-6 border-b-2 border-r-2 border-blue-200 md:flex rounded-2xl">
          <div className="absolute w-12 h-12 bg-blue-200 rounded-full -bottom-6 -left-0"></div>
          <div
            className="z-10 hidden w-full px-10 mt-16 md:w-1/2 md:mt-0 md:block"
            data-sal="slide-up"
            data-sal-duration="300"
            data-sal-easing="ease"
          >
            <div className="mx-auto overflow-hidden rounded-lg shadow-xl lg:w-4/5">
              {digital[0].image && (
                <Image
                  fluid={digital[0].image.childImageSharp.fluid}
                  alt={
                    digital[0].altText ||
                    digital[0].image.childImageSharp.fluid.originalName
                  }
                />
              )}
            </div>
          </div>
          <div className="w-full px-6 md:w-1/2 md:px-12">
            <h2 className="text-2xl font-bold text-gray-900">
              <Title title={digital[0].title} />
            </h2>
            <div
              className="block w-full mt-6 md:w-1/2 md:hidden"
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-easing="ease"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                {digital[0].image && (
                  <Image
                    fluid={digital[0].image.childImageSharp.fluid}
                    alt={
                      digital[0].altText ||
                      digital[0].image.childImageSharp.fluid.originalName
                    }
                  />
                )}
              </div>
            </div>
            {digital[0].type.map(service => {
              return (
                <div className="flex mt-10" key={service.id}>
                  <div className="my-auto text-xl md:text-3xl">
                    <AiOutlinePoweroff />
                  </div>
                  <div className="mt-2 ml-4">
                    <h1 className="text-base font-semibold md:text-lg">
                      {service.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-700 md:text-base">
                      {service.subTitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="absolute h-20 bg-blue-200 wid -bottom-20 left-6"></div>
      </section>
    </article>
  )
}

export default Services

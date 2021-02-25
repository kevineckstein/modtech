import React from "react"
import Image from "gatsby-image"
import Slider from "react-slick"
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding"
import { GiComputing } from "@react-icons/all-files/gi/GiComputing"
import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer"

const Hero = ({ banners, digital, infrastructure, management }) => {
  const settings = {
    speed: 500,
    infinite: true,
    arrows: false,
    autoplay: true,
    lazyLoad: false,
    autoplaySpeed: 3000,
    className: "banner",
  }

  return (
    <article className="min-h-full bg-gray-100 lg:-mt-20">
      <div className="w-full min-h-full mx-auto">
        <Slider {...settings}>
          {banners.map(banner => {
            return (
              <section
                key={banner.strapiId}
                className="inline-block w-full min-h-full"
              >
                <div className="relative text-left">
                  {banner.image && (
                    <Image
                      fluid={banner.image.childImageSharp.fluid}
                      style={{ maxHeight: `680px` }}
                      alt={
                        banner.altText ||
                        banner.image.childImageSharp.fluid.originalName
                      }
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full bg-textBG lg:h-1/3 h-2/5 ">
                    <div className="container w-full px-6 py-2 mx-auto lg:py-3">
                      <div>
                        <h1 className="overflow-hidden text-sm leading-4 tracking-wider uppercase lg:text-2xl sm:text-lg md:text-2xl whitespace-nowrap lg:whitespace-normal overflow-ellipsis text-shadow-xl text-secondary">
                          {banner.title}
                        </h1>
                        <p className="overflow-hidden text-xs leading-3 tracking-wider text-gray-200 capitalize lg:text-lg sm:text-base whitespace-nowrap lg:whitespace-normal overflow-ellipsis font-sub text-shadow-lg">
                          {banner.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}
        </Slider>
      </div>
      <section className="container flex flex-wrap items-center justify-center gap-1 mx-auto -mt-10 text-center lg:gap-8 ">
        <div className="z-10 w-4/5 px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg lg:mx-0 lg:w-1/4 hover:shadow-xl">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-3xl text-white rounded-md bg-primary">
              <GiGearHammer />
            </div>
          </div>
          <h1 className="pt-4 text-xl font-semibold text-gray-700 md:text-2xl">
            {management[0].title}
          </h1>
          <p className="py-4 text-sm text-gray-500 md:text-base">
            {management[0].subTitle}
          </p>
        </div>
        <div className="z-10 w-4/5 px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg lg:mx-0 lg:w-1/4 hover:shadow-xl">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-2xl text-white rounded-md bg-primary">
              <BsBuilding />
            </div>
          </div>
          <h1 className="pt-4 text-xl font-semibold text-gray-700 md:text-2xl">
            {infrastructure[0].title}
          </h1>
          <p className="py-4 text-sm text-gray-500 md:text-base">
            {infrastructure[0].subTitle}
          </p>
        </div>
        <div className="z-10 w-4/5 px-4 py-4 mx-auto mt-6 bg-white rounded-lg shadow-lg lg:mx-0 lg:w-1/4 hover:shadow-xl">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-3xl text-white rounded-md bg-primary">
              <GiComputing />
            </div>
          </div>
          <h1 className="pt-4 text-xl font-semibold text-gray-700 md:text-2xl">
            {digital[0].title}
          </h1>
          <p className="py-4 text-sm text-gray-500 md:text-base">
            {digital[0].subTitle}
          </p>
        </div>
      </section>
    </article>
  )
}

export default Hero

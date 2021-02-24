import React from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const {
    serviceParagraph,
    serviceTitle,
    imagesParagraph,
    imagesTitle,
    serviceType,
    images,
    banner,
    metaTagTitle,
    metaTagKeywords,
    metaTagDescription,
  } = data.service
  const settings = {
    speed: 500,
    infinite: true,
    arrows: false,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    className: "banner",
  }
  return (
    <article>
      <SEO
        title={`Modern Tech Ltd - ${metaTagTitle}`}
        keywords={metaTagKeywords}
        description={metaTagDescription}
      />
      <Layout>
        <section className="h-full bg-gray-100 lg:-mt-20">
          <div className="w-full h-full mx-auto">
            <Slider {...settings}>
              {banner.map(banners => {
                return (
                  <section
                    key={banners.id}
                    className="inline-block w-full h-full"
                  >
                    <div className="relative text-left">
                      <img
                        src={banners.url}
                        className="object-cover object-center w-full h-auto max-h-banner"
                        alt={banners.alternativeText || banners.name}
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-textBG lg:h-1/3 h-2/5 ">
                        <div className="container w-full px-6 py-2 mx-auto lg:py-3">
                          <div>
                            <h1 className="overflow-hidden text-sm leading-4 tracking-wider uppercase lg:text-2xl sm:text-lg md:text-2xl whitespace-nowrap overflow-ellipsis text-shadow-xl text-secondary">
                              {banners.caption}
                            </h1>
                            <p className="overflow-hidden text-xs leading-3 tracking-wider text-gray-200 capitalize lg:text-lg sm:text-base whitespace-nowrap overflow-ellipsis font-sub text-shadow-lg">
                              {banners.alternativeText}
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
          <div className="hidden w-full -mt-24 bannerBG lg:block"></div>
        </section>
        <section className="bg-gradient-to-t from-gray-100 via-blue-100 to-gray-100">
          <div className="container px-6 pt-4 pb-24 mx-auto" id="temp-service">
            <section>
              <div className="mb-20 text-center">
                <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
                  {serviceTitle}
                </h1>
                <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                  {serviceParagraph}
                </p>
              </div>
              <div className="flex flex-wrap -mx-2 lg:w-11/12 sm:mx-auto sm:mb-2">
                {serviceType.map(service => {
                  return (
                    <div
                      className="w-full p-2 sm:w-1/2"
                      key={service.id}
                      data-sal="slide-down"
                      data-sal-duration="300"
                      data-sal-easing="ease"
                    >
                      <div className="flex items-center h-full p-4 bg-white rounded-lg">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="flex-shrink-0 w-6 h-6 mr-4 text-primary"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="font-medium title-font">
                          {service.service}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="text-gray-600">
              <div className="my-20 text-center">
                <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
                  {imagesTitle}
                </h1>
                <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                  {imagesParagraph}
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                {images.map(image => {
                  return (
                    <div
                      className="w-full p-4 rounded lg:w-1/4 md:w-1/2"
                      key={image.id}
                      data-sal="fade-in"
                      data-sal-duration="600"
                      data-sal-easing="ease"
                    >
                      <img
                        alt={image.alternativeText || image.name}
                        className="block object-cover object-center w-full h-full rounded"
                        src={image.url}
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </article>
  )
}

export const query = graphql`
  query GetSingleService($url: String) {
    service: strapiServices(url: { eq: $url }) {
      mainTitle
      serviceParagraph
      serviceTitle
      imagesParagraph
      imagesTitle
      metaTagTitle
      metaTagKeywords
      metaTagDescription
      serviceType {
        service
        id
      }
      banner {
        url
        id
        name
        alternativeText
        caption
      }
      images {
        url
        id
        name
        alternativeText
      }
    }
  }
`

export default ComponentName

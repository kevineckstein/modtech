import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes: about },
  } = data
  return (
    <Layout>
      <SEO
        title="Eckstein Modern Tech Ltd - About"
        keywords="Trinidad, Eckstein Modern Tech Ltd, Mission Statement, About Us, Vision, Who We Are"
        description="Eckstein Modern Tech Ltd mission is to improve Trinidad's technology and provide innovation solutions"
      />
      <article className="flex flex-col items-center content-center justify-center py-24 lg:-mt-20 bg-gradient-to-t from-gray-100 to-blue-100">
        <div className="container mx-6">
          <Image
            fluid={about[0].image.childImageSharp.fluid}
            alt={
              about[0].altText ||
              about[0].image.childImageSharp.fluid.originalName
            }
            className="w-64 h-64 m-8 mx-auto rounded-full"
          />
          <section className="content-center w-4/5 h-auto mx-auto text-center">
            <Title title="Who we are" />
            <p className="p-4 mt-4 text-sm font-thin text-gray-600 md:text-lg">
              {about[0].WhoWeAre}
            </p>
          </section>

          <section className="block w-full h-auto mt-8 lg:flex align-center">
            <div className="flex self-center justify-center w-full text-black lg:w-6/12 align-center">
              <Title title="Our Mission" />
            </div>
            <div className="flex w-full h-40 p-4 px-6 text-center text-gray-600 md:h-56 md:justify-center md:items-center lg:text-left lg:w-6/12 align-center">
              <p className="m-2 text-sm md:text-lg">{about[0].OurMission}</p>
            </div>
          </section>
          <section className="block w-full h-auto lg:flex align-center">
            <div className="flex self-center justify-center w-full text-black lg:hidden lg:w-6/12 align-center ">
              <Title title="Our Vision" />
            </div>
            <div className="flex w-full h-40 p-4 px-6 text-center text-gray-600 md:h-56 md:items-center md:justify-center lg:text-left lg:w-6/12 align-center">
              <p className="m-2 text-sm md:text-lg">{about[0].OurVision}</p>
            </div>
            <div className="self-center justify-center hidden w-full p-4 text-black lg:flex lg:w-6/12 align-center">
              <Title title="Our Vision" />
            </div>
          </section>
        </div>
      </article>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        OurMission
        OurVision
        WhoWeAre
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        strapiId
      }
    }
  }
`

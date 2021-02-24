import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Partners from "../components/Partners"
import Donation from "../components/Donation"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiBanners: { nodes: banners },
    allStrapiDigitalService: { nodes: digital },
    allStrapiInfrastructureServices: { nodes: infrastructure },
    allStrapiManagementServices: { nodes: management },
    allStrapiPartners: { nodes: partners },
    allStrapiTestimonials: { nodes: testimonials },
  } = data
  return (
    <Layout>
      <SEO />
      <Hero
        banners={banners}
        digital={digital}
        infrastructure={infrastructure}
        management={management}
      />
      <Services
        digital={digital}
        infrastructure={infrastructure}
        management={management}
      />
      <Partners partners={partners} />
      <Jobs testimonials={testimonials} />
      <Donation />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBanners {
      nodes {
        title
        subtitle
        strapiId
        altText
        image {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 1520
              maxHeight: 680
              webpQuality: 100
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              originalName
            }
          }
        }
      }
    }
    allStrapiDigitalService {
      nodes {
        strapiId
        subTitle
        title
        altText
        type {
          id
          subTitle
          title
        }
        id
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              originalName
            }
          }
        }
      }
    }
    allStrapiInfrastructureServices {
      nodes {
        strapiId
        subTitle
        title
        altText
        id
        type {
          id
          subTitle
          title
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              originalName
            }
          }
        }
      }
    }
    allStrapiManagementServices {
      nodes {
        strapiId
        subTitle
        title
        altText
        id
        type {
          id
          subTitle
          title
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              originalName
            }
          }
        }
      }
    }
    allStrapiPartners {
      nodes {
        strapiId
        altText
        image {
          childImageSharp {
            id
            fixed(height: 80, width: 80, grayscale: true) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
    allStrapiTestimonials {
      nodes {
        position
        name
        quote
        strapiId
        altText
        image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              originalName
            }
          }
        }
      }
    }
  }
`

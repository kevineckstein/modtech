import React from "react"
import Layout from "../components/Layout"
import Donations from "../components/Donations"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Donation = ({ data }) => {
  const {
    allStrapiDonations: { nodes: donations },
  } = data
  return (
    <Layout>
      <SEO
        title="Eckstein Modern Tech Ltd - Donations"
        keywords="Trinidad, Eckstein Modern Tech Ltd, Donations, Community, Help, Provide"
        description="Eckstein Modern Tech Ltd creates donation drives to help communities and problems areas in Trinidad. With donations we aim to change and make Trinidad a better place."
      />
      <Donations donations={donations} />
    </Layout>
  )
}

export default Donation

export const query = graphql`
  {
    allStrapiDonations {
      nodes {
        embeddedurl
        strapiId
      }
    }
  }
`

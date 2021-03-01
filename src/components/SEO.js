import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, name, description, keywords }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultKeywords,
    author,
    defaultName,
    background_color,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    name: name || defaultName,
    author: author,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname}`,
    background_color: background_color,
  }
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Trinidad Technology Solutions Website",
      "@author": `${seo.author}`,
      url: `${seo.siteUrl}`,
      title: `${seo.title}`,
      name: `${seo.name}`,
      background_color: `${seo.background_color}`,
    },
  ]
  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="name" content={seo.name} />
      <meta name="background_color" content={seo.background_color} />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.name && <meta property="og:name" content={seo.name} />}
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.author && <meta property="og:author" content={seo.author} />}
      {seo.background_color && (
        <meta property="og:background_color" content={seo.background_color} />
      )}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  name: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  name: null,
  description: null,
  keywords: null,
  author: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultName: name
        defaultKeywords: keywords
        defaultDescription: description
        siteUrl: siteUrl
        author: author
        background_color: background_color
      }
    }
  }
`

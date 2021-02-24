import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultKeywords,
    author,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname}`,
    author: author,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Trinidad Technology Solutions Website",
          "@author": "${seo.author}",
          "url": "${seo.siteUrl}",
          "name": "${seo.title}",
        }
      `}
      </script>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.author && <meta property="og:author" content={seo.author} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
  author: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultKeywords: keywords
        defaultDescription: description
        siteUrl: siteUrl
        author: author
      }
    }
  }
`

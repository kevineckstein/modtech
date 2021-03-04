import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO
        title="Modern Tech Ltd - 404"
        name="Modern Tech Ltd - 404"
        keywords="Trinidad, Eckstein Modern Tech Ltd, Error, Not Found, 404"
        description="Eckstein Modern Tech Ltd 404, page not found."
      />
      <article className="flex items-center justify-center w-full min-h-screen py-24 bg-gradient-to-t from-gray-100 to-blue-100">
        <div className="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
          <section className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
            <header className="mb-6">
              <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
                404.
              </h2>
              <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
                Sorry, we couldn't find this page.
              </h3>
            </header>

            <p className="max-w-sm mb-5 leading-5 md:leading-7">
              Don't worry, sometimes even we make mistakes. You can find plenty
              of other things on our homepage.
            </p>
            <Link
              className="inline px-4 py-2 text-xs uppercase transition-colors duration-150 border border-transparent rounded-lg shadow md:text-base text-gray-50 bg-primary focus:outline-none hover:bg-secondary"
              to="/"
            >
              Back to Homepage
            </Link>
          </section>
        </div>
      </article>
    </Layout>
  )
}

export default Error

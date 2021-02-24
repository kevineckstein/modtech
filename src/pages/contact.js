import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import emailjs from "emailjs-com"
import Contacts from "../components/Contact"
import { Formik, Form, Field, ErrorMessage } from "formik"
import swal from "sweetalert2"
import SEO from "../components/SEO"

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Modern Tech Ltd - Contact"
          keywords="Trinidad, Eckstein Modern Tech Ltd, Contact, Information, Email, Address, Phone Number"
          description="Eckstein Modern Tech Ltd contact inforamtion and ways in reaching us to create modern solutions"
        />
        <article className="relative min-h-screen lg:-mt-20 lg:pt-20 bg-gradient-to-t from-gray-100 to-blue-100">
          <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
              <Title title="Contact Us" />
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Leave us a message and we will get back to you as soon as
                possible!
              </p>
            </div>
            <div className="mx-auto lg:w-1/2 md:w-2/3">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values, actions) => {
                  const template = {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                  }
                  const service = process.env.GATSBY_EMAILJS_SERVICE
                  const temp = process.env.GATSBY_EMAILJS_TEMPLATE
                  const user = process.env.GATSBY_EMAILJS_USER
                  emailjs.send(service, temp, template, user).then(
                    result => {
                      swal.fire({
                        title: "Success!",
                        text: "Your message has been successfully send!",
                        icon: "success",
                      })
                    },
                    error => {
                      swal.fire({
                        title: "Error!",
                        text: `Your message was unable to send! 
                        Error code: ${error}`,
                        icon: "error",
                      })
                    }
                  )
                  actions.setSubmitting(false)
                }}
                validate={values => {
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  const errors = {}
                  if (!values.name) {
                    errors.name = "Name Required"
                  }
                  if (!values.email || !emailRegex.test(values.email)) {
                    errors.email = "Valid Email Required"
                  }
                  if (!values.message) {
                    errors.message = "Message Required"
                  }
                  return errors
                }}
              >
                {() => (
                  <Form className="flex flex-wrap -m-2">
                    <div className="w-1/2 p-2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="text-sm text-gray-600 md:text-base font-sub"
                        >
                          Name
                        </label>
                        <Field
                          name="name"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none bg-gray-50 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <span className="text-sm text-red-500">
                        <ErrorMessage name="name" />
                      </span>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="text-sm text-gray-600 md:text-base font-sub"
                        >
                          Email
                        </label>
                        <Field
                          name="email"
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none bg-gray-50 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <span className="text-sm text-red-500">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="w-full p-2">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="text-sm text-gray-600 md:text-base font-sub"
                        >
                          Message
                        </label>
                        <Field
                          id="message"
                          name="message"
                          className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-300 rounded outline-none resize-none bg-gray-50 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-indigo-200"
                          component="textarea"
                        />
                      </div>
                      <span className="text-sm text-red-500">
                        <ErrorMessage name="message" />
                      </span>
                    </div>

                    <button
                      className="flex px-8 py-2 mx-auto text-lg text-white border-0 rounded bg-primary focus:outline-none hover:bg-secondary"
                      type="submit"
                    >
                      Send
                    </button>
                    <Contacts />
                  </Form>
                )}
              </Formik>
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

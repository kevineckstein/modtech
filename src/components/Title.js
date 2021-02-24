import React from "react"

const Title = ({ title }) => {
  return (
    <div className="pb-2 text-2xl leading-relaxed lg:text-4xl text-primary ">
      <h1 className="z-10 inline-block">{title || ""}</h1>
    </div>
  )
}

export default Title

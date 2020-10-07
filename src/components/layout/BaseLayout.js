import React from 'react'

const BaseLayout = (props) => {
  return (
    <>
      Hi, I'm a base layout

      {props.children}
    </>
  )
}

export default BaseLayout

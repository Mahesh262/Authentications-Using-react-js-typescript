import React from 'react'
import CommonCanavs from './CommonCanavs'

const Popovers = () => {
  return (
    <>
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
    <CommonCanavs/>
    
    </>
  )
}

export default Popovers
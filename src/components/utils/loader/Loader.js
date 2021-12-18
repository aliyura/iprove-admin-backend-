import React from 'react'
import Roller from 'src/assets/images/loader.gif'

var Loader = (props) => {
  return (
    <div className="centered-text">
      <img src={Roller} alt="Loader" />
    </div>
  )
}

export default Loader

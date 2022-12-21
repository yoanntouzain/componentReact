import React from 'react'
import './modals.css'

export default function Modals(props) {
  return (
    <>
      <button onClick={props.open}>{props.buttonValue}</button>
      <div id="confirmation" className={`modal ${props.classNameModal}`}>
        <div className="background-modal">s</div>
        <div className="text">{props.message}</div>
        <div className="croix" onClick={props.close}>
          x
        </div>
      </div>
    </>
  )
}

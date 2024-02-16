import React from 'react'
import "./Modal.css"
const Modal = ({setmodalOpen}) => {
  return (
    <div className="modal">
      <div >
        <button onClick={()=>setmodalOpen(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            close
        </button>
      </div>
    </div>
  )
}

export default Modal

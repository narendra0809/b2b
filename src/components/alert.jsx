import React from 'react'
import { Dialog } from '@mui/material'

function Alert({ open, handleClose, success, children }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          width: '90%',
          maxWidth: '300px',
          borderRadius: '7px',
        },
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <div className="p-3">
          <span
            className={`d-flex justify-content-center align-items-center rounded-circle mx-auto mb-4 ${
              success ? 'bg-success' : 'bg-danger'
            }`}
            style={{
              width: '70px',
              height: '70px',
            }}
          >
            {success ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-xmark text-white fs-1"></i>
            )}
          </span>
          <div className="mb-3 text-center">
            <h4>{success ? 'Awesome!' : 'Sorry!'}</h4>
            {children}
          </div>
          <button
            className={`btn w-100 ${success ? 'btn-success' : 'btn-danger'}`}
            onClick={handleClose}
          >
            OK
          </button>
        </div>
      </div>
    </Dialog>
  )
}
export default Alert

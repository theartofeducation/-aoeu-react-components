import React from "react"
import PropTypes from "prop-types"
import { ToastContainer, Flip, toast } from "react-toastify"
import { isNotEmpty } from "@aoeu/util"
import "react-toastify/dist/ReactToastify.css"

export const NotificationCenter = ({
  position,
  closeAfterDuration,
  showProgressBar,
  closeOnClick,
  rtl,
  draggable,
  pauseOnHover
}) => (
  <ToastContainer
    position={position}
    autoClose={closeAfterDuration}
    hideProgressBar={!showProgressBar}
    newestOnTop={false}
    closeOnClick={closeOnClick}
    rtl={rtl}
    pauseOnFocusLoss
    draggable={draggable}
    pauseOnHover={pauseOnHover}
    transition={Flip}>
  </ToastContainer>
)

NotificationCenter.propTypes = {
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center"
  ]),
  closeAfterDuration: PropTypes.number,
  showProgressBar: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  rtl: PropTypes.bool,
  draggable: PropTypes.bool,
  pauseOnHover: PropTypes.bool
}

NotificationCenter.defaultProps = {
  position: toast.POSITION.BOTTOM_RIGHT,
  closeAfterDuration: 10000,
  showProgressBar: true,
  closeOnClick: true,
  rtl: false,
  draggable: false,
  pauseOnHover: true
}

export function notify({
  message,
  type
}) {
  if (isNotEmpty(type)) {
    return toast[type](message)
  }

  return toast(message)
}

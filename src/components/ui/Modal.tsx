import { createPortal } from "react-dom";
import { ModalTypes } from "../../typings";

const Modal = ({ children, isVisible }: ModalTypes) => {
  return isVisible ? createPortal(<>{children}</>, document.body) : null;
};

export default Modal;

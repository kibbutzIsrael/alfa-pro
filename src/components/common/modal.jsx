import { useRef } from "react";
import { closeModal } from "../../lib/modalFns";

const Modal = ({ modalId, children }) => {
   return (
      <dialog id={modalId} className="modal">
         <div className="modal-box w-fit p-3">{children}</div>
         {/* close modal on outside click */}
         <span
            onClick={() => closeModal(modalId)}
            className="modal-backdrop"
         ></span>
      </dialog>
   );
};

export default Modal;

("use client");

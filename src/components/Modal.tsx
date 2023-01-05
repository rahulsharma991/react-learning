import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
interface ModalProps {
  onClose: () => void;
  children: any;
  actionBar: any;
}

const Modal = ({ onClose, children, actionBar }: ModalProps): JSX.Element => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-100 opacity-80'
      ></div>
      <div className='absolute inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container") as HTMLElement
  );
};

export default Modal;

import { useRef, useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose }) {
  const dialogRef = useRef();

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  return (
    <dialog className='dialog' ref={dialogRef} onClick={closeModal} >
        <div className='sent'>
          <img src='check.svg' alt='check' />
          <h4>Message Sent!</h4>
        </div>
        <p>Thanks for completing the form We'll be in touch soon!</p>
    </dialog>
  );
}

export default Modal;

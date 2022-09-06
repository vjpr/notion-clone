import React from "react";

interface ModalProps {
  open: boolean;
  children: any;
  close: any;
}

const ImageModal: React.FC<ModalProps> = ({ open, close, children }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-background" onClick={close}></div>
      <div className="image-modal-outer">
        <div className="image-modal-inner">{children}</div>
      </div>
    </>
  );
};

export default ImageModal;

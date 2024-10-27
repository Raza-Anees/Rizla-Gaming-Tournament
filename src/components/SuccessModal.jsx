import React, { useEffect, useRef } from "react";

const SuccessModal = ({ onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <dialog
        ref={dialogRef}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicking outside to close
      >
        <h2 className="text-2xl font-semibold text-black mb-4 text-center">
          Data Saved Successfully
        </h2>
        <form method="dialog" className="flex justify-center">
          <button
            type="button"
            onClick={handleClose}
            className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-navbar-color transition-colors duration-300"
          >
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default SuccessModal;

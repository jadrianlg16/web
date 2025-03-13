'use client'

  // components/ErrorModal.tsx
  import React from 'react';
  
  interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
  }
  
  const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p className="mb-6">{message}</p>
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorModal;
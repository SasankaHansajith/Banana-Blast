import React from 'react';
import './MiddleBox.css'; // Import CSS for MiddleBox styling

const MiddleBox = ({ children }) => {
  return (
    <div className="MiddleBox">
      {children} {/* Render content passed as children */}
    </div>
  );
};

export default MiddleBox;

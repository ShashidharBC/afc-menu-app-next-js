import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center pt-8 text-sm">
      <div className="flex items-center space-x-1">
        <span className="text-gray-600">©</span>
        <span className="font-medium text-gray-800">{currentYear}</span>
        <span className="text-gray-600 font-medium">
          Shashidhara B Challamarada.
        </span>
        <span className="text-gray-600">All rights reserved.</span>
      </div>
    </div>
  );
};

export default Copyright;

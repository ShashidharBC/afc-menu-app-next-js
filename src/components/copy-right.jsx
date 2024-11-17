import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 left-0 lg:left-[12%] right-0 w-full bg-white border-t border-gray-200">
      <div className="flex flex-col items-center justify-center py-4 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-gray-600">©</span>
          <span className="font-medium text-gray-800">{currentYear}</span>
          <span className="text-gray-600 font-medium">
            Shashidhara B Challamarada.
          </span>
        </div>
        <div className="mt-1">
          <span className="text-gray-600">All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

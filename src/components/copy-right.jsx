import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full border-t border-white/60 bg-white/40 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center py-5 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-sky-600">©</span>
          <span className="font-semibold text-slate-800">{currentYear}</span>
          <span className="font-medium text-slate-600">
            Shashidhara B Challamarada.
          </span>
        </div>
        <span className="mt-1 text-xs text-sky-600/80">
          All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Copyright;

import React from 'react';
import { Bell } from 'lucide-react';
import '../../../app/globals.css'

export const Topbar = ({ className, ...props }) => {
  return (
    <div className="fixed top-0 inset-x-1 z-50 px-6 py-5 bg-gray-900 border border-gray-900 border-opacity-10 w-full">
      <div className="flex space-x-4 items-center justify-end w-full max-w-screen-xl mx-auto">
        <div className="inline-flex flex-col items-center justify-start w-9 h-full">
          <div className="flex flex-col items-center justify-start w-9 flex-1">
            <div className="inline-flex space-x-2.5 items-start justify-start w-9 flex-1">
              <div className="flex-1 h-full">
              </div>
              <Bell className="mr-4 mt-1 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start h-full px-3 rounded-full">
          <img className="flex-1 h-6 rounded-lg" src="/EasyGestao.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

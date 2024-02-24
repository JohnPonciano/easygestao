


import '../../../app/globals.css'
import {Bell } from 'lucide-react';

export const Topbar = ({ className, ...props }) => {
  return (
    <div className="inline-flex items-center justify-end px-6 py-5 bg-gray-900 border border-gray-50 border-opacity-10 w-full " style={{ height: 74,}}>
    <div className="flex space-x-4 items-center justify-end w-full" style={{width: 1136, height: 36,}}>
        <div className="inline-flex flex-col items-center justify-start w-9 h-full">
            <div className="flex flex-col items-center justify-start w-9 flex-1">
                <div className="inline-flex space-x-2.5 items-start justify-start w-9 flex-1">
                    <div className="flex-1 h-full">
                        <div className="w-full flex-1 bg-gray-800 border rounded-full border-gray-100" />
                    </div>
                    <Bell className="mr-4 mt-1 text-white" />
                </div>
            </div>
        </div>
        <div className="flex items-center justify-start h-full px-3 rounded-full">
            <img className="flex-1 h-6 rounded-lg" src="/EasyGestao.png" />
        </div>
    </div>
</div>
  );
};

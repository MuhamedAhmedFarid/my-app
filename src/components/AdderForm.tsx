// components/AdderForm.js

import React from 'react';

const AdderForm = ({title}: any) => {

    return (
        <div className="inline-flex mr-3">
            
            <div className='main-w-[200px] relative inline-flex rounded-xl bg-white'>
                <div className='w-[100] rounded-1-md px-3 py-2 text-gray-400'>
                    {title}
                </div>
                <div className="relative">
                    <button
                        type='button'
                        className='border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-r-md pr-3 text-gray-400 hover:bg-gray-50 hover:text-gray-700'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className='h-4 w-4'
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
                <div className='absolute top-6'></div>
            </div>
        </div>
    );
};
export default AdderForm;
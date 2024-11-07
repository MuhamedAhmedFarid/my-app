import React from 'react';
import Image from 'next/image';
import image from '../../public/image 43.jpg';
import mark from '../../public/alert-circle.jpg'
import edit from '../../public/edit.jpg'
import CardButton from './cardButton';
import trash from '../../public/trash-2.svg'

const BatteryCardComponent = ({ standard }: any) => {
    return (
        <div className="border border-gray-300 rounded-lg p-3 px-5 w-full my-3">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                {/* Left side content */}
                <div className="flex-1 mb-2 sm:mb-0">
                    <div className="flex items-center gap-2 mb-1">
                        <Image src={image} alt="battery image" className="w-6 text-blue-500" />
                        <p className="text-sm text-gray-500">Batteries</p>
                    </div>
                    <h4 className="font-bold text-2xl mb-1">Enphase-Encharge 10T</h4>
                    <div className="flex gap-4 mb-1">
                        <p className="text-lg">Is operate: <span className="text-primary100  ml-1">Yes</span></p>
                        <p className="text-lg">Operator: <span className="text-primary100  ml-1">==</span></p>
                        <p className="text-lg">Condition on: <span className="text-primary100  ml-1">Panels</span></p>
                    </div>
                    <div className="flex gap-5">
                        <p>Condition ON: <span className="text-primary100 ml-1">Panels</span></p>
                        <p>Condition: <span className="text-primary100  ml-1">2</span></p>
                    </div>
                </div>

                {/* Right side content */}
                <div className="flex xl-flex-row sm:flex-col justify-between h-full sm:gap-12">
                    {standard ? (
                        <div className="flex items-center  text-blue-600 border-b border-gray-400 ">
                            <p className="text-3xl font-bold mr-2 mb-1">$ 250</p>
                            <Image src={mark} alt='mark-icon' className='w-5 h-5 mr-3' />
                         
                        </div>
                    ) : (
                        <div>
                            <CardButton title='Standard product' />

                        </div>
                    )}

                    <div className="flex md:gap-3 gap-4 self-end  md:mb-0 mb-3">
                        <button>
                            <Image src={trash} alt='trash-icon' className='w-xl h-xl'/>
                        </button>
                        <button>
                            <Image src={edit} alt='edit-icon' className='w-xl h-xl' />
                        
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BatteryCardComponent;
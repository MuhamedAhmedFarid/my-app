import React from 'react'
import Card from './Card'
import AdderForm from './AdderForm'
import ModalInput from './ModalInput'
import CardButton from './cardButton'
import Image from 'next/image'
import image from '../../public/close.svg'
import RadioGroup from './RadioGroup'
function Modal({ handleShowModal }: any) {

  return (

    <div className='w-full h-full absolute top-0 backdrop:first-letter: backdrop:brightness-75 backdrop-blur-md' >

      <div className='container mx-auto mt-8 bg-white shadow-md rounded-lg p-5 w-[90%]'>
        <div className='flex justify-between mb-2'>
      
          <h2 className='font-semibold'>Select Adder type</h2>
          <button
            className="bg-blue transform transition-transform duration-200 hover:scale-110"
            onClick={handleShowModal}
          >
            <Image src={image} alt="close-icon" className="w-8 h-8" />
          </button>

        </div>

        <div className='bg-gray-100 p-2 py-3 rounded-md'>
          <RadioGroup />
          <div className='flex flex-wrap'>
            <div>
              <p className='font-normal my-2 '>Adder catefory</p>
              <AdderForm title='Select option' />
            </div>
            <div>
              <p className='font-norma my-2 mr-2'>Is operator</p>
              <AdderForm title='Yes' />
            </div>
            <div>
              <p className='font-norma my-2 '>Operator</p>
              <AdderForm title='Select optotion' />
            </div>
            <div>
              <p className='font-norma my-2 '>Condition on</p>
              <AdderForm title='Select optotion' />
            </div>
            <div>
              <p className='font-norma my-2 '>Condtion#</p>
              <ModalInput title='condtion' width='110px' />
            </div>
            <div>
              <p className='font-norma my-2 '>price</p>
              <ModalInput title='price' width='80px' />
            </div>
            <div>
              <p className='font-norma my-2 '>Price type</p>
              <AdderForm title='Select optotion' />
            </div>
            <div>
              <p className='font-norma my-2 '>per</p>
              <AdderForm title='Watt' />
            </div>

            <div>
              <p className='font-norma my-2 '>Dimensions</p>
              <ModalInput title='Enter Dimensions' width='160px' />
            </div>

            <div>
              <p className='font-norma my-2 '>Wattage</p>
              <ModalInput title='Enter wattage' width='160px' />
            </div>

            <div>
              <p className='font-norma my-2 '>Condtion#</p>
              <ModalInput title='condtion' width='160px' />
            </div>

            <div>
              <p className='font-norma my-2 '>Brand name</p>
              <ModalInput title='Enter brand name' width='160px' />
            </div>

            <div>
              <p className='font-norma my-2 '>Output</p>
              <ModalInput title='Enter Output' width='160px' />
            </div>
          </div>


        </div>
        <div style={{ textAlign: 'end' }} className=' my-8'>
          <CardButton title='Save rate' bgColor='bg-blue-600' paddingX='px-12' textColor='text-white' paddingY='py-2' />
        </div>

      </div>
    </div>


  )
}

export default Modal
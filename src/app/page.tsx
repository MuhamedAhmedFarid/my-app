'use client';
import { useState } from 'react';
import BatteryCardComponent from '@/components/BatteryCardComponent';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import SelectOption from '@/components/SelectOption';
import Link from 'next/link';
import Alert from "../components/Alert";
import Card from '@/components/Card';
import Modal from '@/components/Modal';

const BatteryPage = () => {


  return (
    <Card>
      <div className="flex justify-between mx-auto text-center my-auto items-center border-b border-gray-200 pb-4">
        <div className='flex text-center items-center'>
          <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
          </svg>
          <h2 className="md:text-3xl text-2xl font-semibold leading-9 text-gray-800 ml-3">Roof Type</h2>
        </div>
        <Link href='/rate' className="text-white bg-primary100 rounded-lg text-base px-4 py-1 mt-2 sm:px-5 sm:py-1.5">
          Create Adder Rate
        </Link>
      </div>

      <div className='my-3'>
        <div className='w-full flex flex-col xl:flex-row justify-between mb-3'>
          {/* Search Bar */}
          <div className='flex-1 mb-3 xl:mb-0'> {/* Ensures margin at the bottom on small screens */}
            <SearchBar placeholder="Search Orders" className="w-full" />
          </div>

          {/* Select Options */}
          <div className='flex '> {/* Add spacing between select options */}
            <SelectOption title='Adder Cat' />
            <SelectOption title='Standard' />
            <SelectOption title='Price info' />
            <SelectOption title='EPC Price' />
          </div>
        </div>

        <Alert />

        {/* Pass different values for standard prop */}

        <BatteryCardComponent standard={false} />  {/* Second component with standard as true */}
        <BatteryCardComponent standard={true} /> {/* First component with standard as false */}
        <BatteryCardComponent standard={true} /> {/* First component with standard as false */}
        <BatteryCardComponent standard={true} /> {/* First component with standard as false */}

      </div>
      
    </Card>
  );
};

export default BatteryPage;
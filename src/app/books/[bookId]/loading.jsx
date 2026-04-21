import React from 'react';
import { BarLoader } from 'react-spinners';

const BookDetailsLoading = () => {
  return (
    <div>
      <div className='my-10 flex justify-center'>
        <BarLoader color='#E7000B' />
      </div>
    </div>
  );
};

export default BookDetailsLoading;
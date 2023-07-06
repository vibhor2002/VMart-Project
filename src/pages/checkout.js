import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import banner from '../../public/ban.png'

function Checkout() {
  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src={banner}
            width={1000}
            height={40}
            style={{objectFit: 'contain'}}
            alt=''
          />

          <div className='flex flex-col p-5 -mb-5 mt-4 space-y-10 bg-white'>
            <h1 className=' text-2xl border-b pb-4 '>Your Shopping Basket</h1>
          </div>
        </div>

        {/* Right */}
      </main>
    </div>
  )
}

export default Checkout
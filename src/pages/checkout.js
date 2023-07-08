import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import banner from '../../public/ban.png'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

function Checkout() {
  const items = useSelector(selectItems);

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
            style={{ objectFit: 'contain' }}
            alt=''
          />

          <div className='flex flex-col p-5 -mb-5 mt-4 space-y-10 bg-white'>
            <h1 className=' text-2xl border-b pb-4 '>
              {items.length === 0
                ? 'Your VMart Basket is Empty'
                : 'Shopping Basket'}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct 
              key={item.i}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
              />
            ))}

          </div>
        </div>

        {/* Right */}
      </main>
    </div>
  )
}

export default Checkout
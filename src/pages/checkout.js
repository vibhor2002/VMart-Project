import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import banner from '../../public/ban.png'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client'

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();

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
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items) :
                <span className='font-bold'>
                  {/* <Currency className="mb-5" quantity={total} currency="USD" /> */}
                </span>
              </h2>

              <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-200'}`}>
                {!session ? `Sign In to Checkout` : 'Proceed to Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    return (
        <div className='grid grid-cols-5'>
            {/* Left */}
            <Image
                src={image}
                height={200}
                width={200}
                style={{ objectFit: 'contain' }}
                alt=''
            />

            {/* Middle  */}
            <div className="col-span-3 mx-5">
                <p className=' text-lg ' >{title}</p>
                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>

                <p className='my-5 text-m my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='USD' />

                {hasPrime && (
                    <div className='mt-2 flex items-center space-x-2'>
                        <img loading='lazy'
                            className="w-12 mb-2"
                            src="https://static.vecteezy.com/system/resources/previews/005/261/540/non_2x/fast-delivery-icon-free-vector.jpg"
                            alt="" />
                        <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>

            {/* Right */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button'>Add to Basket</button>
                <button className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
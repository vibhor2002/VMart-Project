import React, { useState } from "react"
import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>

            <div className="flex justify-center my-3">
                <Image
                    src={image}
                    height={200}
                    width={200}
                    style={{ width: 200, height: 200,objectFit: "contain" }}
                    alt=""
                />
            </div>
            <h4 className="mt-4">{title}</h4>
            <div className="flex mt-2">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-1 line-clamp-2">{description}</p>
            <div>
                <Currency
                    className="mb-5"
                    quantity={price}
                    currency="USD"
                />
            </div> 

            {hasPrime && (
                <div className="flex items-center space-x-2 mt-2">
                    <img className="w-12 mb-2" src="https://static.vecteezy.com/system/resources/previews/005/261/540/non_2x/fast-delivery-icon-free-vector.jpg" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                </div>
            )}

            <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}


export default Product
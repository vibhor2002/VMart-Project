import React from 'react'
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-vmart_blue flex-grow py-2'>
        <div className='mx-4 mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            // objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* Search */}
        <div className='m-4 hidden sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus: outline-none px-4"
            type="text" />
          <SearchIcon
            className="h-12 p-4"
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div>

      </div>
    </header>
  )
}

export default Header
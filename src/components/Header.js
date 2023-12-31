import React from 'react'
import vmart from '../../public/vmart.png'
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)

  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-vmart_blue flex-grow py-2'>
        <div className='mx-4 mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image

            onClick={() => router.push('/')}
            src={vmart}
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}            
            className='cursor-pointer'
          />
        </div>

        {/* Search */}
        <div className='m-4 hidden sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus: outline-none px-4"
            type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className=' text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap '>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p>
              {session ? `Hello, ${session.user.name}` : `Sign In`}
            </p>
            <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>
              {items.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-vmart_blue-light text-white text-sm'>
        <p className='flex items-center link'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link '>VMart Business</p>
        <p className='link '>Today' Deals</p>
        <p className='link '>Appliances</p>
        <p className='link hidden lg:inline-flex'>Books</p>
        <p className='link hidden lg:inline-flex'>Kids Toys</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
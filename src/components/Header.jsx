import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link href='/'>
          <h1 className='font-bold text-lg sm:text-2xl flex flex-wrap'>
            <span className='text-white'>Move</span>
            <span className='text-blue-200'>In!</span>
          </h1>
        </Link>
        <form className='bg-white p-2 rounded-lg flex items-center shadow-md'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-28 sm:w-64 text-gray-800'
          />
          <button>
            <FaSearch className='text-blue-500' />
          </button>
        </form>
        <ul className='flex gap-6'>
          <Link href='/'>
            <li className='hidden md:inline text-white hover:text-blue-300 transition duration-300'>
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li className='hidden md:inline text-white hover:text-blue-300 transition duration-300'>
              About
            </li>
          </Link>
          
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>
              <li className='hidden md:inline text-slate-700 hover:underline'>
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}

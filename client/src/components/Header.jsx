import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
        <span className="text-slate-400">Krushna</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input placeholder='Search...' type='text' className='bg-transparent focus:outline-none w-44 sm:w-64'/>
        <FaSearch className="text-slate-800 "></FaSearch>
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className="text-slate-800 sm:inline hover:underline hidden">Home</li>
        </Link>
        <Link to='/about'>
        <li className="text-slate-800 sm:inline hover:underline hidden">About</li>
        </Link>
        <Link to='/sign-in'>
        <li className="text-slate-800 sm:inline hover:underline">Sign in</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

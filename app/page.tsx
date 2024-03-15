import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className=''>
      <nav className='flex bg-[#D9D9D9] h-20 w-full'>
      </nav>
      <div className='flex flex-row w-full p-24'>
        <div className='w-1/2 mt-7 ml-7 font-sans'>
          <h1 className='text-7xl font-extrabold'>Taylor <span className='bg-gradient-to-l from-pink-400 via-pink-500 to-red-400 text-transparent bg-clip-text font-extrabold'> Fandom </span></h1>
          <p className='text-xl'>“People haven't always been there for me but music always has.”</p>
          <p className='text-xl'>-Tyalor Swift</p>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img src='image/butterfly.png' className=' h-[360px]'/>
        </div>
      </div>
    </div>
  )
}
export default HomePage
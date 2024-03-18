import SwiftySpaceSvg from '@/public/assets/SwiftySpaceSvg';
import React from 'react'

type Props = {}

const SwiftySpace = (props: Props) => {
    return (
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center py-12'>
            <div className='flex flex-col pt-4 sm:pt-0'>
                <h1 className='text-3xl font-bold'>Swifty Space</h1>
                <p className='text-xl'>Join Our Community for a Symphony of Taylor Swift Stories, Songs, and Shared Moments!</p>
                <button className='bg-black rounded-md px-2 py-3 drop-shadow-xl text-white  w-[50%] uppercase'>Comming Soon...</button>
            </div>
            <div className='w-1/2 sm:w-[430px]'>
                <SwiftySpaceSvg />
            </div>
        </div>
    )
}
export default SwiftySpace;
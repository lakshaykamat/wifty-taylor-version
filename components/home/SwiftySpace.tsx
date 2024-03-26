import SwiftySpaceSvg from '@/public/assets/SwiftySpaceSvg';
import React from 'react'

type Props = {}

const SwiftySpace = (props: Props) => {
    return (
        <div className='flex flex-col-reverse sm:flex-row pb-24 justify-between pt-24'>
            <div className='flex flex-col gap-3 justify-between'>
                <h1 className='sm:text-4xl text-2xl'>Swifty Space</h1>
                <p className='text-xl max-w-md text-lead'>Join Our Community for a Symphony of Taylor Swift Stories, Songs, and Shared Moments!</p>
                <button className='bg-black rounded-md px-2 py-3 mt-5 drop-shadow-xl text-white  w-[50%] uppercase'>Comming Soon...</button>
            </div>
            <div className=''>
                <SwiftySpaceSvg />
            </div>
        </div>
    )
}
export default SwiftySpace;
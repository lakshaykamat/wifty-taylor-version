import React from 'react'
import SongOfDaySvg from '@/public/assets/SongOfDaySvg'
type Props = {}

const SongOfDay = (props: Props) => {
    return (
        <div className='flex sm:flex-row flex-col pb-24 justify-between items-center'>
            <div className='flex flex-col w-1/2 gap-4 mb-3'>
                <h1 className='sm:text-4xl text-2xl'>Song Of The Day</h1>
                <div className='bg-[#d9d9d9] sm:p-10 p-7 rounded-md'>
                    <h1 className='text-bold text-xl'>Karma</h1>
                    <p className='text-base text-muted-foreground italic mb-5'>“No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.”―Taylor Swift</p>
                    <div className='flex items-center gap-2'>
                    <>
                        <svg
                            id="Layer_1"
                            version="1.1"
                            width={30}
                            height={30}
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
                        </svg>
                    </>
                    <p>234</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <SongOfDaySvg />
            </div>
        </div>
    )
}

export default SongOfDay;
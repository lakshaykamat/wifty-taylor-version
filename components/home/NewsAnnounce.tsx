import NewsAnnounceSvg from '@/public/assets/NewsAnnounceSvg'
import React from 'react'

type Props = {}

const NewsAnnounce = (props: Props) => {
  return (
    <div className='flex sm:flex-row flex-col gap-3 items-center pb-24 justify-between'>
      <div className='outline outline-gray-100 outline-2'>
        <NewsAnnounceSvg />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <h1 className='text-2xl sm:text-4xl'>News And Announcement</h1>
        <div className='flex flex-col gap-3'>
          <div className='bg-[#d9d9d9] sm:p-7 p-5 rounded-md'></div>
          <div className='bg-[#d9d9d9] sm:p-7 p-5 rounded-md'></div>
          <div className='bg-[#d9d9d9] sm:p-7 p-5 rounded-md'></div>
          <div className='bg-[#d9d9d9] sm:p-7 p-5 rounded-md'></div>
        </div>
      </div>
    </div>
  )
}

export default NewsAnnounce;
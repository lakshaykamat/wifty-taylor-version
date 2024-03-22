import NewsAnnounceSvg from '@/public/assets/NewsAnnounceSvg'
import React from 'react'

type Props = {}

const NewsAnnounce = (props: Props) => {
  return (
    <div className='flex sm:flex-row sm:items-start flex-col items-center'>
      <div className='w-1/2 sm:w-[600px]'>
        <NewsAnnounceSvg />
      </div>
      <div className='flex flex-col pt-4 sm:pt-0 gap-4 sm:w-1/2'>
        <h1 className='text-4xl font-bold'>News And Announcement</h1>
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
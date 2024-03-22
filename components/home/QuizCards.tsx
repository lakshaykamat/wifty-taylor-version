import React from 'react'

type Props = {}

const QuizCards = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold'>Question Your Existance</h1>
                <p className='text-base text-muted-foreground'>Are you a real swifty...? I don't think so.</p>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 pt-5'>
                <div className='bg-[#d9d9d9] sm:h-[320px] h-[300px] rounded-md'></div>
                <div className='bg-[#d9d9d9] sm:h-[320px] h-[300px] rounded-md'></div>
                <div className='bg-[#d9d9d9] sm:h-[320px] h-[300px] rounded-md'></div>
            </div>
        </div>
    )
}

export default QuizCards;
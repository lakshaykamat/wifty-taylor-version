type LeadProps = {
    avatar: string,
    name: string,
    score: number
  }
  const LeaderBoardCard = ({ avatar, name, score }: LeadProps) => {
    return (
  
      <div className='flex p-3 justify-between items-center bg-[#d9d9d9] rounded-md '>
        <div className='flex items-center gap-2'>
          <img src={avatar} alt="lakshay's image" className='rounded-full h-9 w-9' />
          <p className='text-sm'>{name}</p>
        </div>
        <h1 className='text-md font-bold'>{score}</h1>
      </div>
  
    )
  }

  export default LeaderBoardCard
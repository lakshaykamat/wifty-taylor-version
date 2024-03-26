import QuizCard from '@/components/QuizCard'
import HeroSection from '@/components/home/HeroSection'
import LeaderBoardCard from '@/components/home/LeaderboardCard'
import QuizCards from '@/components/home/QuizCards'
import SwiftySpace from '@/components/home/SwiftySpace'
import NewsAnnounce from '@/components/home/NewsAnnounce'
import SongOfDay from '@/components/home/SongOfDay'


const HomePage = () => {
  const DATA = [
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Lakshay Kamat",
      score: 234
    },
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Chitransh verma",
      score: 234
    },
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Anshuman prajapati",
      score: 234
    },
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Lakshay Kamat",
      score: 234
    },
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Lakshay Kamat",
      score: 234
    },
    {
      userIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyoaze4gk8HUF57dHFOglmTJ6RNHf13LlnQ&usqp=CAU",
      name: "Lakshay Kamat",
      score: 234
    }
  ]
  return (
    <div className=''>
      {/* Hero section */}
      <HeroSection />
      {/* Leader board section */}
      <div className='max-w-2xl mx-auto'>
        <div className='mb-3 flex flex-col '>
        <h1 className='sm:text-4xl text-2xl'>Siwfties Section</h1>
        <p className='text-base text-muted-foreground'>Speeding towards your destination with Swift.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2 grid-cols-1'>
          {
            DATA.map((user, i) => <LeaderBoardCard key={i} name={user.name} score={user.score} avatar={user.userIcon} />)
          }
        </div>
      </div>
      {/* Quote section */}
      <div className='flex max-w-xl mx-auto p-7'>
        <p className='text-muted-foreground italic'>“No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.”<br />-- Taylor Swift</p>
      </div>

      {/* Quiz Cards */}
      <QuizCards />

      {/* Swifty Space */}
      <SwiftySpace />

      {/* News and Annoucement */}
      <NewsAnnounce />

      {/* Song of the day */}
      <SongOfDay />
    </div>
  )
}

export default HomePage
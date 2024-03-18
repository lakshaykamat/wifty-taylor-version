import HeroSection from '@/components/home/HeroSection'
import LeaderBoardCard from '@/components/home/LeaderboardCard'


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
        <h1 className='text-3xl font-bold'>Siwfties Section</h1>
        <p className='text-lg text-muted-foreground'>Speeding towards your destination with Swift.</p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2 grid-cols-1'>
          {
            DATA.map((user, i) => <LeaderBoardCard key={i} name={user.name} score={user.score} avatar={user.userIcon} />)
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
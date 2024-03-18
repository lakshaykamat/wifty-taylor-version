import HeroPic from "@/public/assets/HeroPic"

const HeroSection = () => {
    return (
  
      <div className='flex flex-col-reverse sm:flex-row pb-7 justify-between items-center'>
        <div className='flex flex-col'>
          <h1 style={{fontFamily:"Over the Rainbow"}} className="mb-1 sm:text-7xl text-4xl font-sans font-extrabold tracking-wide font-['Over_the_Rainbow
']">Taylor Fandom</h1>
          <p className="pt-3 text-lg text-muted-foreground mb-2">“People haven&apos;t always been there for me but music always has.”<br />-- Tyalor Swift</p>
          <button className='bg-black rounded-md px-2 py-3 drop-shadow-xl text-white  w-[100%] sm:w-[90%] uppercase'>check in into <b>Swifty SPACE</b></button>
        </div>
        <HeroPic/>
      </div>
    )
  }
  export default HeroSection
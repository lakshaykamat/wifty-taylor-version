import Leadearboard from "@/components/home/Leaderboard";
import Cards from "@/components/home/Cards";
import taylorAlbumsData from "@/components/taylorAlbum"

const HomePage = () => {
  return (
    <div className="relative mx-auto my-10">
      <picture className="w-full outline">
        <source
          srcSet="/image/taylor.webp"
          className="w-full h-[680px] drop-shadow-xl object-cover rounded-xl"
          media="(min-width: 640px)"
        />
        <img
          src="/image/mobileView.webp"
          className="w-full h-[580px] drop-shadow-xl object-cover rounded-xl"
          alt="Taylor Swift is singing"
        />
      </picture>
      <div className="sm:px-10 px-5 py-5 mx-5 sm:mx-10 bg-blend-saturation backdrop-blur-md flex flex-col sm:outline outline-1 outline-gray-800 gap-3 text-white absolute top-[5%] sm:top-[10%] rounded-lg">
        <h1 className="text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
          Super Swifty
        </h1>
        <p className="text-base sm:font-semibold sm:text-2xl">
          Let's see how much do you know taylor swift?
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto flex flex-col">
        {/* <h1 className="text-3xl font-bold text-start mb-3">Leadearboard</h1> */}
        <div className="mb-5 flex flex-col gap-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Swiftie Legends
          </h3>
          <p className="text-sm text-muted-foreground">
            Conquer the Charts, Rule the Leaderboard!
          </p>
        </div>
        <div className="hidden md:grid grid-flow-col grid-rows-5 gap-5">
          <Leadearboard limit={10} />
        </div>
        <div className="grid md:hidden grid-flow-col grid-rows-5 gap-5">
          <Leadearboard limit={5} />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Most Played</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          {
            taylorAlbumsData.map((album) => {
              return <Cards albumCover={album.albumCover} name={album.name} description={album.description} quizAttempts={album.quizAttempts} />
            })
          }
        </div>
      </div>
    </div>

  );
};

export default HomePage;

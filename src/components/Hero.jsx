import hero from '../assets/nike-hero.png'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="grid w-full place-items-center bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff] px-4 py-10 md:py-20">
        <div className="text-center max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Step Into The Future With Our Collection
          </h1>
          <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae vero, quod ipsa ea ipsam iure quae repudiandae qui tenetur enim in? Non repellendus animi
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-3 md:px-10 md:py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-sky-500 transition-colors">
              View Collection
            </button>
          </div>
          <div className="mt-8 md:mt-10 flex justify-center">
            <img
              src={hero}
              alt="hero-img"
              className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[790px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
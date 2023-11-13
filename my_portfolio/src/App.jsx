import Navbar from "./components/navbar"

function App() {
  return (
    <div>
  <Navbar />
  <section id="home" className="flex items-center justify-center h-screen">
    <div className="flex justify-center gap-44">
      <div className="flex h-200 w-200 pr-24">
        <img src="/images/mypic.png" alt="mypic" />
      </div>
      <div className="self-center text-center">
        <div className="font-semibold decoration-gray-300 text-3xl font-merriweather text-zinc-600">
          Hello, I'm
        </div>
        <div className="text-5xl font-bold font-merriweather">Christian David Cruz</div>
        <div className="font-semibold text-2xl font-merriweather text-zinc-600">
          Software Developer
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex gap-4">
            <button className="font-semibold py-3 px-8 rounded-full bg-white text-black border-black border">
              Download CV
            </button>
            <button className="font-semibold py-3 px-8 rounded-full bg-gray-800 text-white border-gray-300 border ">
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="about" className="flex flex-col h-screen mt-28 pt-28">
      <div className="text-3xl font-bold  text-center font-merriweather">About Me</div>
      <div className="text-2xl font-medium text-center font-merriweather">Get to know more</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-1/2">
          <div className="mt-28">
            <p className="mb- text-2xl pl-7 font-merriweather">
             -- I am a passionate and
              dedicated individual who thrives on the excitement of learning and
              mastering new technologies. With a natural aptitude for picking up
              new skills
            </p>
            <p className="mb- text-2xl pl-7 mt-10 font-merriweather">
             -- I consider myself a fast learner who is always ready to take on
              new challenges in the ever-evolving world of technology. My
              journey into the world of technology began with an insatiable
              curiosity and a hunger for knowledge. Since discovering my
              passion, I've been in a relentless pursuit of growth and
              innovation.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center pt-10 font-merriweather">
          <img src="/images/aboutme.png" className="rounded-full border-2 border-black" width={400}height={400}
          />
        </div>
      </div>
    </section>
</div>

  );
}

export default App

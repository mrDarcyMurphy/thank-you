import './App.css'
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const bgStart = "rgb(0,0,0)"
const bgEnd = "rgb(0,104,140)"
const cyan = "0,174,239"
const magenta = "236,0,140"
const yellow = "255,242,140"
const white = "255,255,255"
const blendingValue = "screen" // overlay | screen | hard-light

function App() {

  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart={bgStart}
        gradientBackgroundEnd={bgEnd}
        firstColor={cyan}
        secondColor={yellow}
        thirdColor={magenta}
        fourthColor={magenta}
        fifthColor={yellow}
        pointerColor={white}
        blendingValue={blendingValue}
      >
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-5xl text-center leading-normal md:text-7xl md:leading-normal lg:text-9xl lg:leading-normal">
          <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Thank you!
          </h1>
        </div>
      </BackgroundGradientAnimation>
    </>
  )
}

export default App

import React from "react";
import './App.css'
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


const bgStart = "rgb(0,0,0)"
const bgEnd = "rgb(0,104,140)"
const cyan = "0,174,239"
const magenta = "236,0,140"
const yellow = "255,242,140"
const white = "255,255,255"
const blendingValue = "screen" // overlay | screen | hard-light

const message = "Thank you!"

function App() {

  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart={bgStart}
        gradientBackgroundEnd={bgEnd}
        firstColor={cyan}
        secondColor={magenta}
        thirdColor={yellow}
        fourthColor={yellow}
        fifthColor={magenta}
        pointerColor={white}
        blendingValue={blendingValue}
      >
        {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-5xl text-center leading-normal md:text-7xl md:leading-normal lg:text-9xl lg:leading-normal">
          <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Thank you!
          </h1>
        </div> */}
      </BackgroundGradientAnimation>
      <div className="absolute top-0 w-full h-full">
        <CardContainer className="inter-var w-full h-full">
          <CardBody className="relative group/card w-1/2 h-1/2">
            <div className="relative font-bold px-0 py-28 pointer-events-none text-5xl text-center leading-normal md:text-7xl md:leading-normal lg:text-9xl lg:leading-normal">
              <CardItem translateZ="80" className="w-full absolute text-shadow">
                {message}
              </CardItem>
              <CardItem translateZ="85" className="w-full absolute text-shadow">
                {message}
              </CardItem>
              <CardItem translateZ="90" className="w-full absolute text-shadow">
                {message}
              </CardItem>
              <CardItem translateZ="95" className="w-full absolute text-shadow">
                {message}
              </CardItem>
              <CardItem as={"h1"} translateZ="100" className="w-full absolute text-shadow text-white ">
                {message}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  )
}

export default App

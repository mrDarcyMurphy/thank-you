import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { WavyBackground } from "./ui/wavy-background";

const bgStart = "rgb(0,0,0)"
const bgEnd = "rgb(0,104,140)"
const cyan = "0,174,239"
const magenta = "236,0,140"
const yellow = "255,242,140"
const white = "255,255,255"
const blendingValue = "screen" // overlay | screen | hard-light

const message = "Thank you!"

const colors = [`rgb(${cyan})`, `rgb(${magenta})`, `rgb(${yellow})`]

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
        className="absolute"
      />
      <div className="absolute top-0">
        <WavyBackground waveWidth={5} colors={colors} className="max-w-4xl mx-auto pb-40 absolute top-0" />
      </div>
      <div className="absolute top-0 w-full h-full z-20">
        <CardContainer className="inter-var w-full h-full">
          <CardBody className="relative group/card w-full h-full font-knewave pointer-events-none thank-you">
            <CardItem translateZ="50" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="55" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="60" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="65" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="70" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="75" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="80" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="85" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="90" className="absolute text-shadow">{message}</CardItem>
            <CardItem translateZ="95" className="absolute text-shadow">{message}</CardItem>
            <CardItem as={"h1"} translateZ="100" className="absolute text-shadow text-white">
              {message}
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </>
  )
}

export default App

import {DistortionText} from "react-text-fun";
export const Distortion = ({text}) => {
    return(
        <>
            <DistortionText
                text = {text}
                fontSize= {100}
                speed = {1.5}
                rotation = {45}
                distortX = {.5}
                distortY = {.3}
                fill = "white"
                noiseAmplitude = {.8}
                noiseVolatility = {1.2}
            />
        </>
    )
}
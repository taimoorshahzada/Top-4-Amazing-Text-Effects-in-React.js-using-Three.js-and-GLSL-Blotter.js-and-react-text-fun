import { SplitColorChannelText } from "react-text-fun";
export const SplitColor = ({text}) => {
    return(
        <>
            <SplitColorChannelText
                text = {text}
                fontSize = {100}
                rotation = {45}
                rgbOffset = {.18}
                addBlur = { true }
                addNoise = { true }
             />
        </>
    )
}
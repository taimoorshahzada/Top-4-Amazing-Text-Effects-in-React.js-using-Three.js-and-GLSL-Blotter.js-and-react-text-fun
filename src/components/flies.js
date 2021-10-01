import { FliesText } from "react-text-fun";

export const Flies = ({text}) => {
    return(
        <>
            <FliesText
                cellRadius = {.5}
                text ={text}
                fontSize = {100}
                cellWidth = {.02}
                speed = {2}
                dodge = {true}
                dodgeY = {.02}
                dodgeSpread = {.07}
                fill = "white"
             />
        </>
    )
}
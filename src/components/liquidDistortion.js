import { LiquidDistortionText } from "react-text-fun";
 export const LiquidDistortion = ({text}) => {
     return(
         <>
            <LiquidDistortionText
                text = {text} 
                fontSize = {100}
                fill = "white"
                speed = {.6}
                volatility = {.02}
                />
         </>
     )
 }
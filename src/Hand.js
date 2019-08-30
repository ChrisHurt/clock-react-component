import React from 'react'
import './Hand.scss'

export default function Hand({name,angle,thickness,length}){
        let state = {
            name: name,
            angle: angle,
            thickness: thickness,
            hand_length: length
        }


        return (
            <div style = {{width: thickness, height: state.hand_length, transform: `rotate(${state.angle}deg)`}} className={`${state.name} clock-hand`}>
            </div>
        )
}
import React from 'react'
import './Clock.scss'
import Hand from './Hand.js'

export default class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date(),
            intervalHandle: null,
            secondsAngle: 0,
            minutesAngle: 0,
            hoursAngle: 0,
            secondLoops: 0,
            minuteLoops: 0,
            hourLoops: 0
        };
    }

    calculateAngles = () => {
        this.setState({
            time: new Date()
        })

        if(this.state.time.getSeconds() === 0){
            this.setState({
                secondLoops: this.state.secondLoops + 1
            })
        }
        if(this.state.time.getMinutes() === 0){
            this.setState({
                secondLoops: this.state.minuteLoops + 1
            })
        }
        if(this.state.time.getHours() === 0){
            this.setState({
                secondLoops: this.state.hourLoops + 1
            })
        }

        this.setState({
            secondsAngle: (Math.round((this.state.time.getSeconds() / 60)*360)) + this.state.secondLoops * 360,
            minutesAngle: (Math.round((this.state.time.getMinutes() / 60)*360)),
            hoursAngle: (Math.round((this.state.time.getHours() / 12)*360))
        });


        // console.log(`secondsAngle: ${this.state.secondsAngle}`)
        // console.log(`minutesAngle: ${this.state. minutesAngle}`)
        // console.log(`hoursAngle: ${this.state.hoursAngle}`)
        // console.log('')
    }

    componentWillMount(){
        setInterval(this.calculateAngles,1000)
        this.setState({
            secondTransition: false,
            minuteTransition: false,
            hourTransition: false
        })
    }

    componentDidMount(){
        this.setState({
            secondTransition: true,
            minuteTransition: true,
            hourTransition: true
        })
    }
    
    render (){
        const {
            hoursAngle,
            hourTransition,
            minutesAngle,
            minuteTransition,
            secondsAngle,
            secondTransition
        } = this.state

        return (
            <div className="clock-backplate">
                <Hand name ="hour-hand" angle = {hoursAngle} thickness={'2px'} length={'20vmin'} transition={hourTransition}/>
                <Hand name ="minute-hand" angle = {minutesAngle} thickness={'1px'} length={'23vmin'} transition={minuteTransition}/>
                <Hand name ="second-hand" angle = {secondsAngle} thickness={'0.5px'} length={'24vmin'} transition={secondTransition}/>
            </div>
        )
    }
}
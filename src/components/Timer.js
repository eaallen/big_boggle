import React from 'react'

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: props.timer_time }
    }
    timer = () => {
        this.interval = setInterval(() => {
            if (this.state.time > 0) {
                this.setState((prevState) => ({
                    time: prevState.time - 1000
                }))
            }
        }, 1000)

    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    componentDidMount = () => {
        this.timer()
    }
    componentDidUpdate = () => {
        console.log('comp did update')
        if(this.props.reset[0]){
            clearInterval(this.interval)
            this.setState({time:this.props.timer_time})
            this.timer()
            this.props.reset[1](false)
        }
    }

    converTime = (millis)=>{
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    render = () => {
        if (this.state.time <= 0) {
            clearInterval(this.interval)
        }
        console.log('render timer')
        return (<div className='timer-time'>
            {this.converTime(this.state.time)}
        </div>)
    }
}


// export default function Timer(){
//     const [time, setTime] = React.useState(10000)
//     React.useEffect(()=>{
//         const timer=setTimeout(() => {
//             // setTime(time -  1000);
//           }, 1000);
//           // Clear timeout if the component is unmounted
//           return () => clearTimeout(timer);
//     })
//     setInterval(()=>{
//         console.log(time)
//         if(time > 0)setTime(time-1000)
//     }, 1000)
//     return(<div className='timer-time'>
//         {time}
//     </div>)
// }
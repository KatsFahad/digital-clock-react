import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())

        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    const timeFormat = () =>{
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const secounds = time.getSeconds()
        const meridiem = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(secounds)} ${meridiem}`

    }

    const padZero = (number) =>{
        return (number < 10 ? '0' : '') + number

    }

    return ( 
        <div className="clock-container">
            <div className="clock">
                <span>{timeFormat()}</span>
            </div>

        </div>
     );
}
 
export default DigitalClock;

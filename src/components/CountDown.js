import { useEffect, useState } from "react";

const CountDown = ({ timer }) => {

    const now = new Date().getTime()

    const [time, setTime] = useState()

    useEffect(() => {
        const counter = setTimeout(() => {
            let dist = timer - now

            let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((dist % (1000 * 60)) / 1000);

            setTime(hours + ":" + minutes + ":" + seconds)
        }, 1000)
    }, [time])
    return (
        <>
            Offers starts in <span>{time}</span>
        </>
    )
}

export default CountDown
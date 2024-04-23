import { useState } from "react"


export const useCounter = (initialValue = 1, min = 0, max = 5) => {

    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        if (counter === max) return
        setcounter(counter + value)
    }

    const decrement = (value = 1) => {
        if (counter === min) return
        setcounter(counter - value)
    }

    const reset = () => {
        setcounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
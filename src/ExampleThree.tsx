import React, { useEffect, useState } from 'react'

// make the counter work and stop Interval
export const ExampleThree = () => {

    const [show, setShow] = useState(true)

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => setShow((s) => !s)}>{show ? 'Ocultar' : 'Mostrar'}</button>
            <br />
            {
                show && <Aux />
            }
        </div>
    )
}

export const Aux = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(function () {
            setCount((prevCount) => prevCount + 1);
            console.log('setInterval', count);
        }, 1000);
        return (() => {
            clearInterval(interval)
        })
    }, []);
    return <div>Count: {count}</div>;
}

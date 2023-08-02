import { useCallback, useState } from "react";


export const ExampleOne = () => {

    // make the counter work
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    // const increment = () => {
    //     setCount(count + 1)
    // }

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
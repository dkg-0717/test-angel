import { useState } from "react";

export const ExampleTwo = () => {
    const [value, setValue] = useState(
        "Update This text"
    );
    return (
        <>
            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
            </div>

            <div className="wrapper">
                <ExampleTwoChild setValue={setValue} />
            </div>
        </>
    )
}

const ExampleTwoChild = ({ setValue }: any) => {
    return (
        <>
            <div>Child</div>
            <button onClick={() => setValue("new text")}>Change Parent Value</button>
        </>
    );
}
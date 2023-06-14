import React from 'react'
import './Event.css';
export default function Event() {
    const [count, setCount] = React.useState(0);
    const [lastclicked, setLastClicked] = React.useState();
    // Function for counting the addbutton
    const Addbutton = () => {
        setCount(count + 1)
    }
    // Function to store the information of last clicked button. 
    const Lastclicked = (data) => {
        const i = data.target.name
        setLastClicked(i);
    }

    return (
        <div className="container mt-5">
            <div className='row mt-5'>
                <div className='col-3'>
                    <button type="button" className="btn btn-outline-primary">COUNTER-{count}</button>
                </div>
                <div className='col-3'>
                    <button type="button" className="btn btn-outline-primary new">LAST BUTTON CLICKED- {lastclicked}  </button>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-3'>
                    <button type="button" className="btn btn-outline-primary" onClick={Addbutton}>ADD A BUTTON</button>
                </div>
            </div>
            <div className='row mt-5'>
                {
                    [...Array(count)].map((val, i) => {

                        return <div className='col-2 mt-2' key={i}> <button type="button" name={i + 1} className="btn btn-outline-primary" onClick={Lastclicked}>Button : {i + 1}</button></div>

                    })

                }

            </div>
        </div>

    )
}

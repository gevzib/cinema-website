import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function item() {
    return <h2>123</h2>
}

let jobs = {
    "artist": <h2 style={{backgroundColor:"red"}}>Artist Details...</h2>,
    "designer": (props) => {
        return <h3>Job Type: {props.type}</h3>
    },
    "ninja": (props) => {
        return <h2 style={{backgroundColor:props.color, color:"white"}}>Ninja Details...</h2>
    },
    "programmer": <h2 style={{backgroundColor:"pink"}}>Programmer Details...</h2>
}

let getJob = (key, props) => {
    return typeof jobs[key] == 'function' ? jobs[key] (props) : jobs[key];
}

function list(data) {
    if(data) {   
        return data.split(",").map(item=>{
            return item > 'b' ? (<p>item : {item}</p>) : (<p>item : **{item}</p>);
        })
    }
}



export default (props) => {
    let [title, setTitle] = useState("ABCXYZ123");
    let [counter, setCounter] = useState(0);

    let test = {
        age:123,
        gender: 'mf',
        telephone:'999'
    };

    let [inputs, setInputs] = useState(test);

    function doInput(event) {
        event.preventDefault();
        if(event.target.name) {
            let newData = {...inputs};
            newData[event.target.name] = event.target.value;
            setInputs(newData);
        }
    }

    return (
        /*<form onSubmit={e=>{e.preventDefault();}}>
            <h1>Person: {counter}</h1>
            <h4>{inputs.title}</h4>
            <h4>{inputs.age}</h4>
            <h4>{inputs.gender}</h4>
            <h4>{inputs.telephone}</h4>
            <button onClick={e=>{setCounter(++counter);}}>Click me</button>
            <table onInput={e=>{doInput(e)}}>
                <tr>
                    <td>Name:</td>
                    <td><input name="title" value={props.title} /></td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td><input name="age" value={props.age} /></td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td><input name="gender" value={props.gender} /></td>
                </tr>
                <tr>
                    <td>Telephone:</td>
                    <td><input name="telephone" value={props.telephone} /></td>
                </tr>
                <tr>
                    <td>Person:</td>
                    <td>
                        <select>
                            <option>{inputs.title}</option>
                            <option>{inputs.age}</option>
                            <option>{inputs.gender}</option>
                            <option>{inputs.telephone}</option>
                        </select>
                    </td>
                </tr>
            </table>

            {props.test ? item() : ''}
            {getJob(props.test, props)}
            {list(props.list)}
        </form>*/

        <form onSubmit={e=>{e.preventDefault();}}>
            <h1>Add Film Listing</h1>
            <table>
                <tr>
                    <td>Cinema: </td>
                    <td>
                        <select>
                            <option>Cineworld</option>
                            <option>Empire</option>
                            <option>Everyman</option>
                            <option>Light</option>
                            <option>Odeon</option>
                            <option>Picturehouse</option>
                            <option>Showcase</option>
                            <option>Vue</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Location: </td>
                    <td><input name="location" value={props.location} /></td>
                </tr>
                <tr>
                    <td>Film Title: </td>
                    <td><input name="film" value={props.film} /></td>
                </tr>
                <tr>
                    <td>Timings: </td>
                    <td>10/02/24</td>
                    <td><input name="day1time1" value={props.day1time1} /></td>
                    <td><input name="day1time2" value={props.day1time2} /></td>
                    <td><input name="day1time3" value={props.day1time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>11/02/24</td>
                    <td><input name="day2time1" value={props.day2time1} /></td>
                    <td><input name="day2time2" value={props.day2time2} /></td>
                    <td><input name="day2time3" value={props.day2time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>12/02/24</td>
                    <td><input name="day3time1" value={props.day3time1} /></td>
                    <td><input name="day3time2" value={props.day3time2} /></td>
                    <td><input name="day3time3" value={props.day3time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>13/02/24</td>
                    <td><input name="day4time1" value={props.day4time1} /></td>
                    <td><input name="day4time2" value={props.day4time2} /></td>
                    <td><input name="day4time3" value={props.day4time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>14/02/24</td>
                    <td><input name="day5time1" value={props.day5time1} /></td>
                    <td><input name="day5time2" value={props.day5time2} /></td>
                    <td><input name="day5time3" value={props.day5time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>15/02/24</td>
                    <td><input name="day6time1" value={props.day6time1} /></td>
                    <td><input name="day6time2" value={props.day6time2} /></td>
                    <td><input name="day6time3" value={props.day6time1} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>16/02/24</td>
                    <td><input name="day7time1" value={props.day7time1} /></td>
                    <td><input name="day7time2" value={props.day7time2} /></td>
                    <td><input name="day7time3" value={props.day7time1} /></td>
                </tr>
            </table>
            <button onClick={<Link to="/confirm"></Link>}>Submit</button>
        </form>

    )
};
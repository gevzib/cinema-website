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
        telephone:'999',
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
    
    function sub() {
        sessionStorage.setItem('cinema', document.getElementById("cinema").value);
        sessionStorage.setItem('location', document.getElementById("location").value);
        sessionStorage.setItem('film', document.getElementById("film").value);
        sessionStorage.setItem(document.getElementById("date1").value, []);
        sessionStorage.setItem(document.getElementById("date2").value, []);
        sessionStorage.setItem(document.getElementById("date3").value, []);
        sessionStorage.setItem(document.getElementById("date4").value, []);
        sessionStorage.setItem(document.getElementById("date5").value, []);
        sessionStorage.setItem(document.getElementById("date6").value, []);
        sessionStorage.setItem(document.getElementById("date7").value, []);
    }

    let dates = [];

    function setDates() {
        let date = new Date();
        let d = date.getDate();
        for(let i = 0; i < 7; i++){
            d += 7;
            date.setDate(d);
            dates.push(date.toISOString().split("T")[0]);
        }    
    }

    {setDates()}

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

        <div><br /><br /><br /><br />

        <button>Click me</button>

        <form onSubmit={e=>{e.preventDefault();}}>
            <h1>Add Film Listing</h1>
            <table onInput={e=>{doInput(e)}}>
                <tbody><tr>
                    <td>Cinema: </td>
                    <td>
                        <select id="cinema">
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
                    <td><input id="location" value={this} /></td>
                </tr>
                <tr>
                    <td>Film Title: </td>
                    <td><input id="film" value={this} /></td>
                </tr>
                <tr>
                    <td>Timings: </td>
                    <td>{dates[0]}</td>
                    <td><input id="day1time1" value={this} type="time" /></td>
                    <td><input id="day1time2" value={this} type="time" /></td>
                    <td><input id="day1time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date2" type="date" value={dates[1]} readOnly /></td>
                    <td><input id="day2time1" value={this} type="time" /></td>
                    <td><input id="day2time2" value={this} type="time" /></td>
                    <td><input id="day2time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date3" type="date" value={dates[2]} readOnly /></td>
                    <td><input id="day3time1" value={this} type="time" /></td>
                    <td><input id="day3time2" value={this} type="time" /></td>
                    <td><input id="day3time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date4" type="date" value={dates[3]} readOnly /></td>
                    <td><input id="day4time1" value={this} type="time" /></td>
                    <td><input id="day4time2" value={this} type="time" /></td>
                    <td><input id="day4time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date5" type="date" value={dates[4]} readOnly /></td>
                    <td><input id="day5time1" value={this} type="time" /></td>
                    <td><input id="day5time2" value={this} type="time" /></td>
                    <td><input id="day5time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date6" type="date" value={dates[5]} readOnly /></td>
                    <td><input id="day6time1" value={this} type="time" /></td>
                    <td><input id="day6time2" value={this} type="time" /></td>
                    <td><input id="day6time3" value={this} type="time" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input id="date7" type="date" value={dates[6]} readOnly /></td>
                    <td><input id="day7time1" value={this} type="time" /></td>
                    <td><input id="day7time2" value={this} type="time" /></td>
                    <td><input id="day7time3" value={this} type="time" /></td>
                </tr></tbody>
            </table>
            <button><Link to="confirm">Submit</Link></button>
        </form>
        </div>
    )
};
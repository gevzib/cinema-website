import React from 'react';

let jobs = {
    "artist": <h2>Artist Details...</h2>,
    "designer": (props) => {
        return <h3>Job Type: {props.type}</h3>
    }
}

let getJob = (key, props) => {
    return typeof jobs[key] == 'function' ? jobs[key] (props) : jobs[key];
}

export default (props) => (
    <div>
        <h1>Person:</h1>
        {props.test ? ClipboardItem() : ''}
        {getJob(props.test, props)}
    </div>
);


/*export default ({ name, initial, age, gender, telephone }) => 
<div>
    <h1>Person: </h1>
    <table>
        <tr>
            <td><span>Name:</span></td>
            <td><span>{name}</span></td>
        </tr>
        <tr>
            <td><span>Initial:</span></td>
            <td><span>{initial}</span></td>
        </tr>
        <tr>
            <td><span>Age:</span></td>
            <td><span>{age}</span></td>
        </tr>
        <tr>
            <td><span>Gender:</span></td>
            <td><span>{gender}</span></td>
        </tr>
        <tr>
            <td><span>Telephone:</span></td>
            <td><span>{telephone}</span></td>
        </tr>
    </table><br />
</div>; */

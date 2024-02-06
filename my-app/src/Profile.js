import React from 'react';
import { useState } from 'react';


export default (props) => {
    
   let [inputs, setInputs] = useState({});
   function doInput(event){
    event.preventDefault();
    if(event.target.name){
      let newData = {...inputs};
      newData[event.target.name] = event.target.value;
      setInputs(newData);}}


    let information = {};

    function writeToObject(){
      console.log(document.getElementById("firstName").value);

    }
    
    let dataBind = function(){

    }
    

    dataBind.set = function(key,value){
      information[key] = value;
      console.log(information)
  }
  

    return (
       
        <div style={
          {
           border: '5px solid white',
           padding: `30px`,
           borderRadius: `25px`
          }}>


         
          
          <form  onSubmit = {dataBind.set("firstName",document.getElementById("firstName").value)} onInput = {e => {doInput(e)}} >
          <img id="myImg" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais" style = {{
            borderRadius: `500px`
          }}/>
          

          <div><input id = "firstName" name = "firstName" type="text" required placeholder="First Name" value = {props.firstName} /></div>
          

          <div><input id = "surname" name = "surname" type="text" required placeholder="Last Name"/></div>

          
          <div><input id = "email" name = "email" type="email" required placeholder = "mycinema@email.com"/></div>

           
          <div><input id = "password" name = "password" type="password" required placeholder="Password"/></div>

          <div><input id = "conpassword" name = "conpassword" type="password" required placeholder="Confirm Password"/></div>
  
          <input type = "submit" value = "Save" onclick="dataBind.save()"/>
    
          </form>
        </div>
        
    )
};
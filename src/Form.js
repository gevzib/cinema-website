import React from "react";

function add1(item) {
    let node = document.createElement("li");
    node.innerHTML = `<input id="time" type="time" name ="date1time" onchange="addTime(date1.value, this.value)"/>`;
    document.getElementById(item).appendChild(node);
}

let extraDetails = (details) => {
    alert("Extra details: " + details);
}

 export default (props)=> {
    return (
        <form>
        <label class="grid1">
            <h3>Cinema</h3>
                 <select name="cinema" required>
                    <option>{ props.cinema }</option>
                    <option>Cineworld</option>
                    <option>Empire</option>
                    <option>Everyman</option>
                    <option>Light</option>
                    <option>Odeon</option>
                    <option>Picturehouse</option>
                    <option>Showcase</option>                        
                    <option>Vue</option>
                </select><br /><br />
            </label>
            <label class="grid2">
                <h3>Location</h3>
                <input type="text" name="location" placeholder="E.g. Manchester" value={ props.location }/> 
            </label>
            <label><h3 class="leftheading">Film</h3><input type="text" name="filmtitle" value={ props.film } required/></label><br /><br />
                <h3 class="leftheading">Timings</h3>
                <table>
                    <thead>
                        <th><input type="date" name="date1" id="date1" value={props.date}/></th>
                        <th><input type="date" name="date2" id="date2" value={props.date2}/></th>
                        <th><input type="date" name="date3" id="date3" value={props.date3}/></th>
                        <th><input type="date" name="date4" id="date4" value={props.date4}/></th>
                        <th><input type="date" name="date5" id="date5" value={props.date5}/></th>
                        <th><input type="date" name="date6" id="date6" value={props.date6}/></th>
                        <th><input type="date" name="date7" id="date7" value={props.date7}/></th>
                    </thead>

                    <tr>
                        <td><ul id="list1">
                            <li><input id="time" type="time" name ="date1time" onchange="addTime(date1.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick={() => add1('item1')}/></td>

                        <td><ul id="list2">
                            <li><input id="time" type="time" name ="date2time" onchange="addTime(date2.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add2('list2')" /></td>

                        <td><ul id="list3">
                            <li><input id="time" type="time" name ="date3time" onchange="addTime(date3.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add3('list3')" /></td>

                        <td><ul id="list4">
                            <li><input id="time" type="time" name ="date4time" onchange="addTime(date4.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add4('list4')" /></td>

                        <td><ul id="list5">
                            <li><input id="time" type="time" name ="date5time" onchange="addTime(date5.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add5('list5')" /></td>

                        <td><ul id="list6">
                            <li><input id="time" type="time" name ="date6time" onchange="addTime(date6.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add6('list6')" /></td>

                        <td><ul id="list7">
                            <li><input id="time" type="time" name ="date7time" onchange="addTime(date7.value, this.value)"/></li>
                        </ul><input type="button" value="Add more" onclick="add7('list7')" /></td>
                    </tr>
                </table><br />
                <button onClick={() => extraDetails('abc')}>Click me!</button>
      </form>
    )
  }


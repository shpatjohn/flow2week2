import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

function getAllUsers(){
    let allUser = "<table border=\"1\"><tr><th>name</th><th>id</th></tr>"
    fetch('http://localhost:8080/cors/api/person')
    .then((res) => res.json())
    .then((data) =>  {
        
            allUser += 
            "<tr>" +
            "<td>" + data.name + "</td>" +         
            "<td>" + data.id + "</td>" +
            + "</tr>"
            ;
              
           
           
   
        document.getElementById("output").innerHTML = allUser+="</table>";
         
    })
}

document.getElementById("btn").onclick = getAllUsers;



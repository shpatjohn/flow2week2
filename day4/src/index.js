import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";


function getAllUsers(){
    let allUser = "<table border=\"1\"><tr><th>id</th><th>age</th><th>name</th><th>gender</th><th>email</th></tr>"
    fetch('http://localhost:3333/api/users')
    .then((res) => res.json())
    .then((data) =>  {
        data.map(user => {
            allUser += 
            "<tr>" +
            "<td>" + user.id + "</td>" +
            "<td>" + user.age + "</td>" +
            "<td>" + user.name + "</td>" +
            "<td>" + user.gender + "</td>" +
            "<td>" + user.email + "</td>" 
            + "</tr>"
            ;
              
           
           
        });
        document.getElementById("output").innerHTML = allUser+="</table>";
         
    })
}
function getOneUser(){
    let oneUser = "<table border=\"1\"><tr><th>id</th><th>age</th><th>name</th><th>gender</th><th>email</th></tr>"
    const id = document.getElementById("getUser").value;
    const URL = 'http://localhost:3333/api/users/' + id;
    fetch(URL)
    .then((res) => res.json())
    .then((data) =>  {
          
       oneUser += 
            "<tr>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.age + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.gender + "</td>" +
            "<td>" + data.email + "</td>" 
            + "</tr>"
            ;
            
     document.getElementById("save").innerHTML = oneUser+="</table>";           
         
    })
}

function addUser() {
    const URL= 'http://localhost:3333/api/users/';
    let oneUser = "<table border=\"1\"><tr><th>id</th><th>age</th><th>name</th><th>gender</th><th>email</th></tr>"
    const postHeaders = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: document.getElementById('age').value,
            name: document.getElementById('name').value,
            gender: document.getElementById('gender').value,
            email: document.getElementById('email').value
        })
    };
    fetch(URL,postHeaders)
    .then((res) => res.json())
    .then((data) => {
        oneUser += 
            "<tr>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.age + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.gender + "</td>" +
            "<td>" + data.email + "</td>" 
            + "</tr>"
            ;
            
     document.getElementById("save2").innerHTML = oneUser+="</table>";     

    });
     
}

function delUser() {
    const id = document.getElementById("del").value;
    const URL= 'http://localhost:3333/api/users/' + id;
    const delHeaders = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    fetch(URL,delHeaders)
    .then((res) => res.json())


}

function editUser() {
    const id = document.getElementById("edit").value;
    const URL= 'http://localhost:3333/api/users/' + id;
    const postHeaders = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: document.getElementById('eage').value,
            name: document.getElementById('ename').value,
            gender: document.getElementById('egender').value,
            email: document.getElementById('eemail').value
        })
    };
    fetch(URL,postHeaders)
    .then((res) => res.json())
     
}



document.getElementById("allUser").onclick = getAllUsers;
document.getElementById("btn").onclick = getOneUser;
document.getElementById("addbtn").onclick = addUser;
document.getElementById("delbtn").onclick = delUser;
document.getElementById("editbtn").onclick = editUser;


                        
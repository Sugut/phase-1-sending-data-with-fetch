
const body = document.querySelector("body")

// Add your code here
function submitData(userName,userEmail){

   let userData={
    name : userName,
    email :userEmail,
 } 
  const configurationObject={
    method : 'POST',
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData)
  }
return fetch("http://localhost:3000/users", configurationObject)
  .then(response=>response.json())
  .then(user => {body.append(id)})
  
  .catch(error => {
    alert("Unauthorized Access");
    console.log(error.message);
    body.append(error)
});
} 
submitData();
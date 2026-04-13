
document.getElementById("enlistForm").addEventListener("submit", (e) => 
{
   e.preventDefault();
   const name = 
   {
      firstName: document.getElementById("firstName").value,
      middleName: document.getElementById("middleName").value,
      lastName: document.getElementById("lastName").value
   };
   document.getElementById("submissionButton").value = "ENLIST"
   document.getElementById("message").innerHTML = `${name.firstName} ${name.middleName} ${name.lastName} is now enlisted in the United States military.`;
   document.getElementById("code").innerHTML = JSON.stringify(name);
})







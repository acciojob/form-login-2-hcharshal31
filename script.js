//your JS code here. If required.
document.getElementById("submit-button").addEventListener("click", ()=>{
	const firstName = document.getElementById("first").value;
	const lastName = document.getElementById("last").value;
	const phoneNumber = document.getElementById("phone").value;
	const emailId = document.getElementById("email").value;
	
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`);
});
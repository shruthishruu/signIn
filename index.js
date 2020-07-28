firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.location.href = "dashboard.php"
        }
    });

function login() {
	// body...
	var userEmail = document.getElementById('email_field').value;
	var userPass = document.getElementById('password_field').value;

	window.alert(userEmail+" "+userPass);
	

	/*firebase.auth().onAuthStateChanged(function(user){
		   if(user){
		       window.location.href = "dashboard.php"
		   }
		});
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		window.alert("Error: "+errorMessage);
		});	
	
*/
}
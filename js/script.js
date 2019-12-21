    console.log("¡La vinculación resultó exitosa!");
    function dataProcess() {

      var getFirstName = document.getElementById('first').value;
      var getLastName = document.getElementById('last').value;
      var getBankCode = document.getElementById('code').value;

      /*
      console.log("Description " + "<br>" + "First Name: " + getFirstName + "<br>" + "Last Name: " + "<br>" + "Bank Code: " + getBankCode);
      */

      document.getElementById('cont').innerHTML = "Description " + "<br>" + "First Name: " + getFirstName + "<br>" + "Last Name: " + getLastName + "<br>" + "Bank Code: " + getBankCode;
    }
var objpeople = [
    {
        username : "sam",
        password : "sss",
        email : "email"
    },
    {
        username : "meet",
        password : "ffff",
        email : "email" 
    },
    {
        username : "zzz",
        password : "xxx",
        email : "email"
    }
]

function login() {
    var username = document.getElementById("inp_name").value
    var password = document.getElementById("inp_Sname").value
    var email = document.getElementById("inp_email").value

    for(i = 0; i < objpeople.length; i++) {
        if(username == objpeople[i].username && password == objpeople[i].password && email == objpeople[i].email) { 
            // console.log(username + "is logged in !!!!!")
            document.getElementById('p').innerHTML = username;
            return
        }
        
    }
    var b = "incorrect username or passsowd";
    document.getElementById('pp').innerHTML = b;
}

//-----------------------------------------------------------------------------

function requistuser() {
    var registerusername = document.getElementById("newName").value
    var registerpassword = document.getElementById("NewSname").value
    var registeremail = document.getElementById("NewEmail").value

    var Newuser = {
     username  :  registerusername,
     password : registerpassword,
     email :  registeremail
    }

    for(i = 0; i < objpeople .length; i++) {
        if(registeremail == objpeople[i].email){
            alert("that email is already in use coose another !!!!!")
            return
        }
         if(registerusername == objpeople[i].username){
              alert("that user name  is already ,in use coose another !!!!!")
              return
            }
             else if (registerpassword.length < 3) {
              alert("that password short is too characters include or 8 chararcters")
              return
         }
         
    }

    objpeople.push(Newuser)
    console.log(objpeople)
}






var xyy = "./dashboard.html";

document.getElementById('aaa').href= xyy;
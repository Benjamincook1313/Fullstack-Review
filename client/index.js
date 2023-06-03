
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function login(e){
    e.preventDefault();

    const body = {
        username: usernameInput.value,
        password: passwordInput.value
    };
    // console.log(body);

    axios.post("http://localhost:7788/login", body).then(res =>{
        console.log(res.data);
    }).catch(err => console.log(err));

}

form.addEventListener("submit", login);

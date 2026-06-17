const form = document.getElementById("loginForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const username =
        document.getElementById("username").value;

        localStorage.setItem(
            "username",
            username
        );

        window.location.href =
        "dashboard.html";

    });

}

const welcome =
document.getElementById("welcome");

if(welcome){

    const username =
    localStorage.getItem("username");

    if(!username){

        window.location.href =
        "index.html";

    }

    welcome.innerText =
    `أهلاً ${username}`;
}

function logout(){

    localStorage.removeItem(
        "username"
    );

    window.location.href =
    "index.html";

}
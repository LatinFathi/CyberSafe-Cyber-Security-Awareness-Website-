
let passwords = document.getElementById("password-list").children;

for (let i = 0; i < passwords.length; i++) {
    let currentPassword = passwords[i];

    currentPassword.ondragstart = function(event) {
        event.dataTransfer.setData("text", currentPassword.id);
    };
}

document.getElementById("strong").ondragover = function(event) {
    event.preventDefault();
};

document.getElementById("weak").ondragover = function(event) {
    event.preventDefault();
};

document.getElementById("strong").ondrop = function(event) {
    event.preventDefault();

    let id = event.dataTransfer.getData("text");
    let password = document.getElementById(id);

    if (password) {
        document.getElementById("strong").appendChild(password);

        if (id == "p3" || id == "p7" || id == "p10" || id == "p11" || id == "p15") {
            password.style.color = "green";
        } else {
            password.style.color = "red";
        }
    }
};

document.getElementById("weak").ondrop = function(event) {
    event.preventDefault();

    let id = event.dataTransfer.getData("text");
    let password = document.getElementById(id);

    if (password) {
        document.getElementById("weak").appendChild(password);

        if (id == "p1" || id == "p2" || id == "p4" || id == "p5" || id == "p6" || id == "p8" || id == "p9" || id == "p12" || id == "p13" || id == "p14") {
            password.style.color = "green";
        } else {
            password.style.color = "red";
        }
    }
};

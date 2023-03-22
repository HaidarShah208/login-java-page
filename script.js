function x(h) {
    document.getElementById("names").value = h
}

function y(c) {
    document.getElementById("names").value = c
}

function awair() {
    Toastify({
        text: "Enter your FullName",
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        newWindow: true,
        style: {
            background: "linear-gradient(to right, #70b09b, #423424)",
        }
    }).showToast();
}

function awa() {
    Toastify({
        text: "Enter your Password ",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,  #70b09b, #423424)",
        },
        onClick: function() {} // Callback after click
    }).showToast();
}

function aw() {
    Toastify({
        text: "Enter your Email ",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #70b09b, #423424)",
        },
        onClick: function() {} // Callback after click
    }).showToast();
}
////////////////// these are functions





function thiss() {
    var user = document.getElementById("fname").value
    console.log(user)
    localStorage.setItem('fname', user)
    var fst = document.getElementById("names").value;
    console.log(fst)
    var snd = document.getElementById("pass").value;
    console.log(snd)
    if (!user || user.length <= 3) {
        awair();
        return;

    }
    if (!fst || fst.length <= 3) {
        aw();
        return;
    }

    if (!snd || snd.length <= 3) {
        awa();
        return;
    }

    let a = "admin@user.com";
    let b = "123456";
    if (fst === a && snd === b) {
        window.location.href = "indexs.html";
    } else {

        Toastify({
            text: "Please Correct your Email or password  ",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,

            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right,  #70b09b, #423424)",
            },
            onClick: function() {} // Callback after click
        }).showToast();
        return;
    }
}
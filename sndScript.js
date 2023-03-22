var Fullname = localStorage.getItem('fname');
document.getElementById("Name").textContent = " " + Fullname;

function awairs() {
    Toastify({
        text: "Enter City Name ",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left,  #70b09b, #456789)",
        },
        onClick: function() {} // Callback after click
    }).showToast();
    return;
}

function asss() {
    Toastify({
        text: "Successfully Added in List ",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
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

function awai() {
    Toastify({
        text: "This City is Already Exist ",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
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

////////////
let cites = ['Failabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Shekhupura', 'Karachi']
document.getElementById('cities').onclick = function() {
    document.getElementById('empty').innerHTML = '';

    for (let i = 0; i < cites.length; i++) {
        let num1 = i + 1;
        document.getElementById('empty').style.padding = '10px';
        document.getElementById('empty').innerHTML += num1 + ') ' + cites[i] + '<br>';
    }
}



///////////
document.getElementById('lit').onclick = function() {
    document.getElementById('empty').innerHTML = '';
    let sas = document.getElementById('inpt').value;
    if (!sas || sas.length <= 3) {
        awairs();
        return;
    }


    let cityFirstLeter = sas.slice(0, 1).toUpperCase();
    let cityAllLeter = sas.slice(1).toLowerCase();
    let CityWordCaitalzie = cityFirstLeter + cityAllLeter;

    let cityFound = false;
    for (let i = 0; i < cites.length; i++) {
        if (cites[i] === CityWordCaitalzie) {
            cityFound = true;
            awai();
            let html = "<span style='color:yellow;font-size:20px;'>" + CityWordCaitalzie + "</span>" + " IS ALready Exist in list"
            document.getElementById("empty").innerHTML = html;
        }
    }
    if (cityFound == false) {
        cites.push(CityWordCaitalzie);
        asss();
        let html1 = "<span style='color:yellow;font-size:20px;'>" + CityWordCaitalzie + "</span>" + " has been succesfully added  into list"
        document.getElementById("empty").innerHTML = html1;

    }
}



document.getElementById('butns').onclick = function() {
    document.getElementById('inpt').value = '';
}
document.getElementById('btn').onclick = function() {
    document.getElementById('empty').innerHTML = '';
}
var reputationDisplay = document.getElementById("Reputation");
var prefPartnerDisplay = document.getElementById("prefferedPartner");
var predOrPreyDisplay = document.getElementById("PredvsPrey");
var ageDisplay = document.getElementById("age");
var nameDisplay = document.getElementById("name");
var imageDisplay = document.getElementById("image");

function changeDisplay(name, age, preferedPartner, reputation, predorprey, imageURL) {
    reputationDisplay.innerHTML = '<span class="material-symbols-outlined">military_tech</span>' + reputation + " out of 5 Reputation";
        let temporaryHolder = new String();
        for (item in preferedPartner) {
            temporaryHolder = temporaryHolder + '<span class="badge bg-gradient bg-info border-1 border-black">' + preferedPartner[item] + '</span>';
        }
        prefPartnerDisplay.innerHTML = "Preferred Partner: " + temporaryHolder;
        let temporaryHolder2 = new String();
        for (item in predorprey) {
            if (predorprey[item] == "Pred") {
                temporaryHolder2 = temporaryHolder2 + '<span class="badge bg-gradient bg-dark border-1 border-dark-subtle">Pred</span>';
            } else if (predorprey[item] == "Prey") {
                temporaryHolder2 = temporaryHolder2 + '<span class="badge bg-gradient bg-success border-1 border-black">Prey</span>';
            } else {}
        }
        predOrPreyDisplay.innerHTML = "Type(s): " + temporaryHolder2; // For Loop
        ageDisplay.innerHTML = "Age: " + age;
        nameDisplay.innerHTML = name;
        imageDisplay.setAttribute("src", imageURL);
        delete temporaryHolder, temporaryHolder2;
}

var inputs = document.getElementsByClassName("inputSS");
var inputName = document.getElementById("inputName");
var inputAge = document.getElementById("inputAge");
var inputReputation = document.getElementById("inputReputation");
var inputImage = document.getElementById("inputImageURL");
var inputPred = document.getElementById("isPred");
var inputPrey = document.getElementById("isPrey");
var inputIsMale = document.getElementById("isMale");
var inputIsFemale = document.getElementById("isFemale");
var inputIsOther = document.getElementById("isOther");
var inputPrefMale = document.getElementById("prefmale");
var inputPrefFemale = document.getElementById("preffemale");
var inputPrefOther = document.getElementById("prefotherSex");
var submitButton = document.getElementById("submit");

function updateDisplay() {
    let prefList = [];
    if (inputPrefMale.checked) {
        prefList.push("Male");
    }
    if (inputPrefFemale.checked) {
        prefList.push("Female");
    } 
    if (inputPrefOther.checked) {
        prefList.push("Other");
    }
    let predOrPrey = [];
    if (inputPred.checked) {
        predOrPrey.push("Pred");
    }
    if (inputPrey.checked) {
        predOrPrey.push("Prey");
    }
    changeDisplay(inputName.value, inputAge.value, prefList, inputReputation.value, predOrPrey, inputImage.value);
}

submitButton.addEventListener("click", function() {
    let prefList = [];
    if (inputPrefMale.checked) {
        prefList.push("Male");
    }
    if (inputPrefFemale.checked) {
        prefList.push("Female");
    } 
    if (inputPrefOther.checked) {
        prefList.push("Other");
    }
    let predOrPrey = [];
    if (inputPred.checked) {
        predOrPrey.push("Pred");
    }
    if (inputPrey.checked) {
        predOrPrey.push("Prey");
    }
    let sex = new String();
    if (inputIsFemale.checked) {
        sex = "female";
    } else if (inputIsMale.checked) {
        sex = "male";
    } else if (inputIsOther.checked) {
        sex = "other";
    }
    PEOPLELIST[inputName.value] = {
        "age": inputAge.value,
        "image-url": inputImage.value,
        "iteration": 1,
        "pred-or-prey": predOrPrey,
        "prefered-partner": prefList,
        "sex": sex
    };
    document.getElementById("JSONCODE").textContent = JSON.stringify(PEOPLELIST);
});

for (item in inputs) {
    let element = inputs[item];
    element.addEventListener("change", updateDisplay);
}

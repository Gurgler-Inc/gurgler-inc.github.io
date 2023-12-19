var gurgleButton = document.getElementById("gurgle");
var passButton = document.getElementById("pass");
var reputationDisplay = document.getElementById("Reputation");
var prefPartnerDisplay = document.getElementById("prefferedPartner");
var predOrPreyDisplay = document.getElementById("PredvsPrey");
var ageDisplay = document.getElementById("age");
var nameDisplay = document.getElementById("name");
var imageDisplay = document.getElementById("image");
var personNumber = 0;

function changeDisplay(smashOrPass, name, age, preferedPartner, reputation, predorprey, imageURL) {
    if (smashOrPass == 'smash') {
        mainCard.classList.add("animated");
    } else {
        mainCard.classList.add("animatedPass");
    }
    
    setTimeout(() => {
        mainCard.classList.remove("animated");
        mainCard.classList.remove("animatedPass");
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
      }, 1000);
}

function setToRandomJSON(smashOrPass) {
    let data = PEOPLELIST[Object.keys(PEOPLELIST)[personNumber]];
    console.log("Flag: " + personNumber);
    changeDisplay(smashOrPass, Object.keys(PEOPLELIST)[personNumber], data["age"], data["prefered-partner"], data["rating"], data["pred-or-prey"], data['image-url']);
    delete data;
    personNumber = personNumber + 1;
}

gurgleButton.addEventListener("click", function() {console.log("Gurgle Clicked");setToRandomJSON('smash')});
passButton.addEventListener("click", function() {console.log("Pass Clicked");setToRandomJSON('pass')});

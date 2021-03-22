function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}





function checkCreds() {
    // put the fname input into firstname variable
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "badge number is not applicable";
    }
    // Name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name Strng has too many characters";
    } else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Name String does not have any characters";
    }

    alert("Access Granted, Welcome" + fullName);
    location.replace("index.html");

    //badge number validation
   
    // if (fullName.length < 20 && badgeNumb < 1000 && badgeNumb >= 0 && fullName.length > 1) {
     
    // }

}
function play() {
    var die1 = Math.ceil(Math.random() * 6);


    var die2 = Math.ceil(Math.random() * 6);



    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
      
    
    }

}


function betterCtdnTimer() {
    // build coutndown timer using for loop, i am going from 20 to 0 by 2's
    var countDn = 20;
    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            if (countDn == 0) {
                document.getElementById("ctdnTimer").innerHTML = "Blast off"

            } else if (countDn < 10) {
                document.getElementById("ctdnTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left =" + countDn;
            } else {
                document.getElementById("ctdnTimer").innerHTML = countDn
            }
            countDn = countDn - 2;
        }, i * 2000);

    }
}
// used to play space station sounds
function playStation() {
    mySound = new sound("Juice.WRLD.Bad.Energy.mp3");
    mySound.play();
}
    function playJuice() {
    mySound = new sound("Juice.WRLD.Bad.Energy.mp3");
    mySound.play();
}
//play any sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
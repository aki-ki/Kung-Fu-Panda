// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  // Clear values

  //   Input
  let name = document.getElementById("char-in").value;
  name = name.toLowerCase();
  //   If statement - test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior.";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML =
      " If you beat me, I will go. If not, then it is you who must leave—without your pants!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML =
      " Wings of Justice— KA-KAW!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML =
      " And then you will be stopped... by the unstoppable weapon!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "You really thought that you could send me back to the Spirit Realm? You are just a stupid mortal.";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-quote").innerHTML =
      "  To make something special, you just have to believe it's special.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML = " Remember the path.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      " “ Happiness... must be taken. And I will take mine. ";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      " You are not a monster... you're just a little girl.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      " Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML = " You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    document.getElementById("char-name").innerHTML = "Tai Lung";
    document.getElementById("char-quote").innerHTML =
      " See you on the other side, Dragon Warrior.";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "  I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss wolf";
    document.getElementById("char-quote").innerHTML =
      " “ Guess nobody told you: If you mess with the wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else {
    document.getElementById("char-name").innerHTML = "???";
    document.getElementById("char-quote").innerHTML = "----";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
  // Clear values
  document.getElementById("char-in").value = "";
}

document.getElementById("theme-btn").addEventListener("click", changeTheme);

function changeTheme() {
  let themesearch = document.getElementById("theme-in").value.toLowerCase();
  // Clear values
  document.getElementById("theme-in").value = "";
  if (
    themesearch === "black" ||
    themesearch === "dark" ||
    themesearch === "dark mode" ||
    themesearch === "dark theme"
  ) {
    document.getElementById("title").style.color = "white";
    document.getElementById("div").style.backgroundColor =
      "rgba(72, 116, 63, 0.7)";
    document.getElementById("body").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
  } else if (
    themesearch === "white" ||
    themesearch === "light" ||
    themesearch === "light mode" ||
    themesearch === "light theme"
  ) {
    document.getElementById("title").style.color = "black";
    document.getElementById("div").style.backgroundColor =
      "rgba(72, 116, 63, 0.7)";
    document.getElementById("body").style.backgroundColor =
      "rgba(255,255,255, 0.7)";
  } else if (
    themesearch === "random" ||
    themesearch === "rand" ||
    themesearch === "random color" ||
    themesearch === "random theme"
  ) {
    // Getting the values

    // Text color
    let rRandomText = +Math.floor(Math.random() * 255) + 1;
    let gRandomText = +Math.floor(Math.random() * 255) + 1;
    let bRandomText = +Math.floor(Math.random() * 255) + 1;

    let randTextColor =
      "rgb(" + rRandomText + ", " + gRandomText + ", " + bRandomText + ")";
    // Background
    let rRandomBack = Math.floor(Math.random() * 255) + 1;
    let gRandomBack = Math.floor(Math.random() * 255) + 1;
    let bRandomBack = Math.floor(Math.random() * 255) + 1;

    let randBackColor =
      "rgba(" +
      rRandomBack +
      ", " +
      gRandomBack +
      ", " +
      bRandomBack +
      ", 0.7)";
    // Div

    let rRandomDiv = Math.floor(Math.random() * 255) + 1;
    let gRandomDiv = Math.floor(Math.random() * 255) + 1;
    let bRandomDiv = Math.floor(Math.random() * 255) + 1;

    let randDivColor =
      "rgb(" + rRandomDiv + ", " + gRandomDiv + ", " + bRandomDiv + ")";

    // Replace values
    document.getElementById("title").style.color = randTextColor;
    document.getElementById("char-name").style.color = randTextColor;
    document.getElementById("char-quote").style.color = randTextColor;
    document.getElementById("div").style.backgroundColor = randBackColor;
    document.getElementById("body").style.backgroundColor = randBackColor;
  }
}

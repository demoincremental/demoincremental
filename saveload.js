//playerData for saves.
var money = "";
var AutoIncrementers = "";
var AutoIncrementerCost = 10;

function loadAllValues() {
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('TotalAutoIncrementers').innerHTML = AutoIncrementers;
  document.getElementById('AutoIncrementerCost').innerHTML = AutoIncrementerCost;
}

function saveGame() {
  var playerData = {
    money: money,
    AutoIncrementers: AutoIncrementers,
    AutoIncrementerCost: AutoIncrementerCost
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData", JSON.stringify(playerData));
}

var autoSave = window.setInterval(function() {
  var playerData = {
    money: money,
    AutoIncrementers: AutoIncrementers,
    AutoIncrementerCost: AutoIncrementerCost
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData", JSON.stringify(playerData));
}, 2000);

//setting up a loading function.
function loadGame() {
  var gamesave = JSON.parse(localStorage.getItem("playerData"));
  money = gamesave.money;
  AutoIncrementers = gamesave.AutoIncrementers;
  AutoIncrementerCost = gamesave.AutoIncrementerCost;
  loadAllValues();
}

window.onload = loadGame();

//function used to delete the player's save.
function saveKill() {
  let saveKillPrompt = prompt(
    "Are you sure? Type 'delete save' if you are confident that you wish to delete your save."
  )
  if (saveKillPrompt.toLowerCase() == "delete save") {
    money = "";
    AutoIncrementers = "";
    AutoIncrementerCost = 10;
    localStorage.removeItem("playerData")
  }
  loadAllValues();
}
function BuyAutoIncrementer() {
  if (money >= AutoIncrementerCost) {
    money = money - AutoIncrementerCost;
    AutoIncrementers++;
    AutoIncrementerCost = Math.round(AutoIncrementerCost * 1.2);
    document.getElementById('TotalMoney').innerHTML = money;
    document.getElementById('TotalAutoIncrementers').innerHTML = AutoIncrementers;
    document.getElementById('AutoIncrementerCost').innerHTML = AutoIncrementerCost;
  }
}

//making the auto Incrementers automatically Increment money.
var autoIncrementing = setInterval(function() {money = money + AutoIncrementers, document.getElementById('TotalMoney').innerHTML = money} , 1000)
//1000ms = 1 second

//finding offline progress 
var playerData = {
  money: money,
  AutoIncrementers: AutoIncrementers,
  AutoIncrementerCost: AutoIncrementerCost,
}

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoIncrementerCost').innerHTML = AutoIncrementerCost;
document.getElementById('TotalAutoIncrementers').innerHTML = AutoIncrementers;
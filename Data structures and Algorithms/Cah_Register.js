function checkCashRegister(price, cash, cid) {
  var state ={ status: "INSUFFICIENT_FUNDS", change: [] }
  var dict = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}
  var changeDue = cash - price;
  var TCiD = 0
  cid.reduce((acc, cur) => {TCiD += cur[1]}, 0)

  if (TCiD < changeDue) return state

  if (TCiD == changeDue) return {status: "CLOSED", change: [...cid]}

  var change = []
  cid.reverse().map( i => {
    var n = 0
    if (changeDue >= dict[i[0]]) {
      for (var j = 0; changeDue >= dict[i[0]]; j++){
        if (j >= i[1]/dict[i[0]]) break
        changeDue = (changeDue.toFixed(2) - dict[i[0]])
      }
      change.push([i[0], (j*dict[i[0]])])
    } 
  })
  if (changeDue) return state
  return {status: "OPEN", change: change};
}

https://twitter.com/Chadnium/photo
https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png
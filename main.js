const arrAvg = items.reduce((a, b) => a + b.price, 0) / items.length
console.log(arrAvg.toFixed(2))
document.querySelector(
  "#answer1"
).innerHTML = `The average price is $${arrAvg.toFixed(2)}`

const arrItems = items.filter(function(item) {
  return item.price > 14 && item.price < 18
})
console.log("Items that cost between $14.00 USD and $18.00 USD: ")
var final = arrItems
  .map(function(item) {
    return item.title + "\n\n"
  })
  .join("")
document.querySelector("#answer2").innerHTML = final

var gbpItems = items.filter(function(item) {
  return item.currency_code === "GBP"
})
gbpItems.forEach(function(item) {
  console.log(item.title + " costs £" + item.price)
})

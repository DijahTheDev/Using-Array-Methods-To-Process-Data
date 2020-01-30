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
document.querySelector("#answer3").innerHTML =
  "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"

var woodItems = items.filter(function(item) {
  return item.materials.indexOf("wood") > -1
})
var woodTitles = woodItems.map(function(item) {
  return item.title
})
console.log(woodTitles + "")
document.querySelector("#answer4").innerHTML =
  "SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood"

;("Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.")

;("Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.")

;("Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.")

;("Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.")

var manyMaterials = items.filter(function(item) {
  return item.materials.length > 7
})

manyMaterials.forEach(function(item){
  console.log(item.title + ' has ' + item.materials.length + ' materials: ' + item.materials)
  document.querySelector("#answer5").innerHTML = "Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  'wall mount bottle opener'
  'wedding'
  'man cave'
  'christmas gift'
  'guy gift'
  'fathers day'
  'home bar'
  'beer'
  'bar'
  
  'The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:'
  
  'glass'
  'sandblast cabinet'
  'vinyl'
  'beer glass'
  'pint glass'
  'etched pint glass'
  'etched glass'
  'etched beer glass'
  '16 oz pint'
  'beer gift'
  'etched harry potter glass'
  'the three broomsticks glass'
  'personalized harry potter glass'

  var homemade = items.filter(function(item) {
    return item.who_made === 'i_did'
  })
  console.log(homemade.length + ' were made by their sellers')
  document.querySelector("#answer6").innerHTML = "18 were made by their sellers" 
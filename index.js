const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];



const prices = freelancers.map((eachobj)=> eachobj.price)
let counter = 0;
let total = 0;
for(let i = 0; i< prices.length; i++){
  counter++;
  total = total + prices[i];
}
let average = total / counter;
const header = document.querySelector('#header');
const subheader = document.createElement('h6');
subheader.innerHTML=`the average starting price is $ ${average}`
header.appendChild(subheader)

const names = freelancers.map((eachobj)=>eachobj.name)
const nameheader = document.querySelector('#name')
names.forEach((item)=>
{
const newelm = document.createElement('p')
newelm.innerText = item;
nameheader.appendChild(newelm)

}
)


const occupation = freelancers.map((eachobj)=>eachobj.occupation)
const occupationheader = document.querySelector('#Occupation')
occupation.forEach((item)=>
{
const newelm = document.createElement('p')
newelm.innerText = item;
occupationheader.appendChild(newelm)

}
)



const price = freelancers.map((eachobj)=>eachobj.price)
const pricerheader = document.querySelector('#startingprice')
price.forEach((item)=>
{
const newelm = document.createElement('p')
newelm.innerText = item;
pricerheader.appendChild(newelm)

}
)


function makeName(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function getprice(max){
  return Math.floor(Math.random()*max)
}
console.log(getprice(100))
console.log(makeName(getprice(10)+1));
console.log(makeName(getprice(10)+1));


function test(){
const obj = {};
obj.name = makeName(getprice(10)+1)
obj.occupation = makeName(getprice(10)+1)
obj.price = getprice(100);
freelancers.push(obj);




  setTimeout(test, 5000);
}

test();
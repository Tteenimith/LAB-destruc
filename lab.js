//LAB 1 Class
// class Calculator {
//     constructor(_value = 0){
//       this.value = _value
//     }
//   add(plus){
//     this.value += plus

//     return this

//   }
//   subtract(minus){
//     this.value -= minus
//   }
//   mutiply(muti){
//     this.value *= muti
//   }
//   divide(divi){
//     this.value %= divi
//   }
//   show(){
//     console.log(`value = ${this.value}`)
//   }    
// }

// let num1 = new Calculator(10)
// num1.add(20)
// num1.subtract(10)
// num1.mutiply(10)
// num1.divide(6)
// num1.show()


//LAB 2 

// class Sale {
//   constructor(_name,_amount,_price){
//     this.name = _name,
//     this.amount = _amount,
//     this.price = _price
//   }
//   calcPrice(){
//    return this.amount * this.price

//   }

// }
// // class Beverage extends Sale {
// //   }


// class Beverage extends Sale {
//   constructor(_name,_amount,_price){
//   super(_name,_amount,_price)
//   }
// }

// let beverage = new Beverage('Pepsi',3,19)

// beverage.calcPrice()
// console.log(beverage.calcPrice())


/////////////////////////////////////////////


//LAB 1 isArray

// let isArray = (arr) =>{
//    return Array.isArray(arr)

// }

// console.log(isArray([]))
// console.log(isArray())


// let b = [1,2,3]
// let c = {
//   name :'jim'
// }

// console.log('----------')
// console.log(isArray(b))
// console.log(isArray(c))


/////////////////////////////////////////


//LAB1 object
// let salaries = {
//   john: 100,
//   Ann: 160,
//   Pete: 130
// }
// let key = Object.keys(salaries)
// let num1 = Object.values(salaries)

// let summ = key.reduce((prev, curr) => {
//   return prev += salaries[curr]
// }, 0)

// let summ1 = num1.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// // console.log(key)
// // console.log(num1)
// console.log(summ)
// console.log(summ1)


//LAB 2
// let checkEmptyObj = (obj) => {
//   if (Object.keys(obj).length == 0) {
//     return true
//   } else { return false }
// }
// let x = {}
// let a = {name:'john'}
// console.log(checkEmptyObj(a))

////////////////////////////////////////
//LAB1
// function objectMulti(...obj) {
//   let result = 1
//   for (let kobj of obj) {

//     result *= kobj
//   }
//   return result
// }
// console.log(objectMulti(7, 2))
// console.log(objectMulti(7, 3))
// console.log(objectMulti(7, 4))

//LAB 2
// let filterOutOdds = (...num) => {
//   let res = []
//   for (let item of num) {
//     if (item % 2 == 0) {
//       res.push(item)
//     }
//   }
//   return res

//LAB3
// let mergeObjects = (...obj) => {
//   let em = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(em, obj[i])
//   }
//   return em
// }
// let ob1 = {
//   fname: 'friend1',
//   lname: 'surnameF1'
// }
// let ob2 = {
//   niceName: 'sun'
// }

// console.log(mergeObjects(ob1, ob2))


// }
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6))

//LAB 4 Spread

// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]
// let x = []
// let sum = [5, ...num1, -6, -1, ...num2]
// console.log(sum)

// let s = sum.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(s)

//lab5
// let spreadO = (arr) => {
//   let array2 = [...arr]
//   console.log(array2)

//   array2[3] = array2[3] ** 2
//   return array2
// }

// let arr = [2, 3, 4, 5, 6]
// let res = spreadO(arr)
// console.log(res)

//LAB6
// let bookName = (fname,lname,...hobit)=>{
//   console.log(hobit)
//   return [fname,lname,...hobit,hobit.length]
// }

// let sum = bookName('f1','L1','golf','tennis')
// console.log(sum)

//LAB7
// function dobleAndReturnArgs(arr,...num) {
//    let dobleAndReturnArgs = num.map((item)=> item*2)
//    console.log(dobleAndReturnArgs)
//    return arr.concat(...dobleAndReturnArgs)
// }

// let res = dobleAndReturnArgs([1,2,3],4,4)
// console.log(res)


//LAB9
// let x = [1,2,3]
// let cloneArray = (arr) => {
//   let xcopy = [...arr]
//   return xcopy
// }
// console.log(cloneArray(x))



// //LAB10
// let x = {
//   fname : 'tha',
//   age : 20
// }
// let cloneArray = (arr) => {
//   let xcopy = {...arr}
//   return xcopy
// }
// console.log(cloneArray(x))




////LAB Dectructuring


//LAB 11
// let [first,second,third] = ['Maya','Marisa','Chi']
// console.log(first) //Maya
// console.log(second) // marisa
// console.log(third) // chi

//LAB 12
// let [raindrops ,whiskers, ...aFewofMyFacoriteThing] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',

// ];
// console.log(raindrops) // Raindrops on roses
// console.log(whiskers) // whiskers on kittens
// console.log(aFewofMyFacoriteThing) // array ที่เหลือ

//LAB 13
// let number = [10,20,30];

// [number[1], number[2]] = [number[2], number[1]]
// console.log(number)

//LAB14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered);  //1846 ค่า default


//LAB15

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); //เอาkeyสองตัวรวมกัน

//LAB16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })) // ค่าถูกเปลี่ยนตามที่กำหนด
// console.log(getUserData({ firstName: 'Melissa' })) // ค่าถูกเปลี่ยนแค่ตัวแรก อีกส่วนไม่เปลี่ยนแต่ยังแสดงเพราะมีค่า default
// console.log(getUserData({})) // firstname undefined เพราะไม่ถูกกำหนดค่า

//LAB 17
// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest]


// console.log(admin)


//LAB18
// function ageCheck(firstName, lastName, age) {
//   if (age > 18) {
//     return console.log(`hello ${firstName} ${lastName}`)

//   } else { return console.log('No permit') }


// }
// let f1 = {
//   firstName: 'john',
//   lastName: 'doe',
//   age: 30
// }
// let { firstName, lastName, age } = f1
// console.log(f1)
// ageCheck(firstName, lastName, age)


//LAB19
// let user = {
//   name: 'John',
//   years: 27
// };

// let {name, years: age,isAdmin = false} = user
// console.log(isAdmin)

//LAB21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a,b,c,d,e,f)


//LAB22
// const obj = { prop: 5, prop2: 10 };
// let {prop :a,prop2: b} = obj
// console.log(b) 


//LAB23

// // let a, b;
// let { a, b } = { a: 1, b : 2 };
// console.log(b)

//LAB24
// const [, , ,a,b] = [1,2,3]
// console.log(a) // undefined

//LAB25

// const q = { prop: 5, prop2: [10, 100] };
// let {prop : x,prop2 :[ ,y]} = q
// console.log(y)

//LAB26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [,y]
//     }
//   }
// } = q
// console.log()


//LAB27

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for(let i of names){
//   let {firstName,lastName} = i
//   console.log(firstName,lastName)
// }


//LAB28

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let i of users) {
//   let { user, age = 'Unknow' } = i
//   console.log(user,age)
// }
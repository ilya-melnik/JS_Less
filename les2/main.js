let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: "101"
    }
];

function test() {
    let fn = () => {
        console.log("click")
        fnq();
        fnd();
        fng();
    }
    let fnq = () => { console.log("click")}
    let fnd = () => { console.log("click")}
    let fng = () => { console.log("click")}
    console.log("test")
    return fn;
}

const testArr = () => {
    return students[0]
}; 

//1.Вызов функции

test();
testArr();

console.log(test());
console.log(testArr());
console.log(3 + 5);

//2.Передача функции

console.log(test);
console.log(testArr);
console.log(() => { return "test" });

// map( fn );
// onClick = { fn };

function myMap(arr, callbackFn) {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callbackFn(arr[i]));
    }
    return mappedArr;
}

const addScore = st => ({ 
    ...st,
    scores: st.scores + 10
})

    

console.log(myMap(students, st => ({ ...st, scores: st.scores + 10 })));

// <button onClick={ () => {} }>Click me</button>
// <button onClick={ test }>Click me</button>
// <button onClick={ test()}>Click me</button> //"test" при загрузке, "click" при
// <button onClick={() => {test}>Click me</button>
// <button onClick={() => { test(params) }}>Click me</button> 


function myFilter(arr, callbackFn) {
    const FilteredArr = []
for (let i = 0; i < array.length; i++) {
   if (callbackFn(arr[i])  === true) {
    FilteredArr.push(arr[i])
   }
    
}
return FilteredArr;    
}

//const filterFn = st => st.score >= 100;

console.log(myFilter(student, st => st.score >= 100));


function myFind (arr, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(arr[i])  === true) {
         return arr[i]
        }
         
     }
}


// возвращает первый элемент который true

console.log(MyFind(studens, st => st.name === 'BOB'));
console.log(students.find(st => st.name === "Bob"));

//Фильтр не менят елементы а исходя от условия собирает в новый масмв
//а меп меняет каждый элемент согласно переданой функции
//фаинд берет первый элемент который 
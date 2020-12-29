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
const todoListId1 = "r24g"    // v1
const todoListId2 = "r24ggh"

const todoLists = [
    {
        id: todoListId1,
        title: "Wat to buy"
    },


    {
        id: todoListId2,
        title: "Wat to buy"
    }
]


//невалидный идентифактор

// - c пробелом или с первой цыфрой

const task = [
    {
        id:1,
        name:"CSS",
        isDone: true
    }
]

// - имя переменой как свойство    // мы можем не знать какое значение в переменой (имя свойствва)
const  propName = "status"

const  task3 = {
     [propName]:"ok"
}

console.log(task3[propName])

const  tasks = {
    [todoListId1]: [
        { id:1, name:"a", isDone: true},
        { id:1, name:"b", isDone: false},
        { id:1, name:"c", isDone: true}
    ],
    [todoListId2]: [
        { id:1, name:"AA", isDone: false},
        { id:1, name:"BBb", isDone: false},
        { id:1, name:"CC", isDone: true}
    ]
}



// reduce (используется когда из масива нам нужно получить какоето одно значение)
// например сума всех елементов масива
const arr = [23,34,54,33,44,45,1000]
const  sumArr = arr.reduce( (acc,e) => acc + e, 0  )
console.log(sumArr)
// частая задача, найти максимум масива

// если мы не назначаем стартовое значение аккамулятора, тгда оно будет автоматически
// первым значением в масиве
const  maxArr = arr.reduce( (acc, el )=> acc > el? acc: el  )
console.log(maxArr)



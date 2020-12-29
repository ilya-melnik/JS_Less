
function onClickHandler  (e)  {
    // КАК ОСТАНОВИТЬ ВСПЛЫТИЕ СОБЫТИЯ
    //e.stopPropagation()
console.log(e.currentTarget.id)
}
const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")


sm.onclick = onClickHandler
md.onclick = onClickHandler
bg.onclick = onClickHandler

// удаление обработчика
md.onclick = null

//  Как обратно повесить
md.addEventListener("click", onClickHandler)
//+ позволяет повысить несколько обработчиков

// Удалить обработчик
md.removeEventListener("click", onClickHandler)

const inp = document.getElementById("input")
function onChangeHandler  (e) {
    console.log(e.currentTarget.value)
}

inp.onchange = onChangeHandler
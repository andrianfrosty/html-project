const btn = document.getElementById("btn")
const num = document.getElementById("num")

btn.addEventListener("click", () => {
    numInt = parseInt(num.innerHTML)
    num.innerHTML = numInt + 1
})
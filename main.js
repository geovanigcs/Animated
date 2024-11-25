document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons()
})

hljs.highlightAll()

const dataCustomIcon = document.querySelectorAll("[data-custom-icon]");
dataCustomIcon.forEach((icon) => {
  if (icon.getAttribute("data-custom-icon")) {
    const request = new XMLHttpRequest()
    request.open(
      "GET",
      "./assets/icons/" + icon.getAttribute("data-custom-icon") + ".svg"
    )
    request.setRequestHeader("Content-Type", "image/svg+xml")
    request.addEventListener("load", (event) => {
      if (event.target.status === 200) {
        const response = event.target.responseText
        icon.innerHTML = response
      }
    })
    request.send()
  }
})

const menuBtn = document.getElementById("menu__btn")
const sidebar = document.querySelector(".sidebar")
const closeBtn = document.getElementById("close-sidebar-btn")
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("visible")
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("visible")
})

const odometers = document.querySelectorAll(".odometer")
setTimeout(() => {
    odometers.forEach(list=> {
        let id = list.getAttribute("id")
        if (id === "experience") {
            list.innerHTML = 6
        }
        if (id === "project"){
            list.innerHTML = 150
        }
        if (id === "awards"){
            list.innerHTML = 12
        }
        if (id === "clients"){
            list.innerHTML = 321
        }
    })
}, 4000)
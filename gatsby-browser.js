import "./src/css/main.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const doc = document.documentElement
const w = window

;(function () {
  let prevScroll = w.pageYOffset || doc.scrollTop
  let curScroll
  let direction = 0
  let prevDirection = 0

  const checkScroll = function () {
    curScroll = w.pageYOffset || doc.scrollTop
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1
    }
    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll)
    }
    prevScroll = curScroll
  }

  var toggleHeader = function (direction, curScroll) {
    const header = document.getElementById("header")

    if (direction === 2 && curScroll > 200) {
      header.classList.add("hide")
      prevDirection = direction
    } else if (direction === 1) {
      header.classList.remove("hide")
      prevDirection = direction
    }
  }

  window.addEventListener("scroll", checkScroll)
})()

window.addEventListener("scroll", function () {
  const header = document.getElementById("header")
  if (w.pageYOffset || document.scrollTop || document.body.scrollTop !== 0) {
    header.classList.add("clear")
  } else {
    header.classList.remove("clear")
  }
})

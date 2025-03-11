const sideBar = document.getElementById("sideBar")

const openSideBar = () => {
    sideBar.style.display = 'block'
    sideBar.style.animation = 'sidebar 1s ease '
}
const closeSideBar = () => {
    sideBar.style.display = 'none'
    sideBar.style.animation = 'close 1s ease '
}
const openSidebarBtn = document.getElementById("open-sidebar-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const sidebar = document.getElementById("sidebar");
const sideNavigation = document.getElementById("sidebar-navigation");

openSidebarBtn.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar)

function openSidebar() {
    sidebar.classList.add("opacity-100");
    sidebar.classList.add("z-10")
    sideNavigation.classList.add("translate-x-[0]")
}

function closeSidebar() {
    sidebar.classList.remove("opacity-100");
    sidebar.classList.remove("z-10");
    sideNavigation.classList.remove("translate-x-[0]")
}

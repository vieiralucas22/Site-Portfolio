class Navbar {
  constructor(hamburguerMenu, navList, navLinks) {
    this.hamburguerMenu = document.querySelector(hamburguerMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
  }
}

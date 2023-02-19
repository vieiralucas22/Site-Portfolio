class Navbar {
  constructor(hamburguerMenu, navList, navLinks) {
    this.hamburguerMenu = document.querySelector(hamburguerMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.hamburguerMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    console.log(this);
    this.hamburguerMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.hamburguerMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new Navbar(
  ".menu-hamburguer",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
console.log("lucas");

const Header = {
 render: ()=> {
  return `<nav class="navigation container d-flex">
        <a class="logo" href="/#/">tayo360</a>
        <ul class="nav-list d-flex">
          <li><a href="/#/home">Home</a></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/contact">Contact Us</a></li>
        </ul>

        <div class="hamburger"><i class="fas fa-align-justify"></i></i></div>
      </nav>`
 },
 after_render: () => {
    const navList = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });

    const navHeight = header.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        header.classList.add("fix");
      } else {
        header.classList.remove("fix");
      }
    });

    const links = [...document.querySelectorAll(".nav-list a")];
    links.map((link) => {
      link.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  },
};

export default Header;
 
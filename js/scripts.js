/*!
 * Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */

window.addEventListener("DOMContentLoaded", (event) => {
  fetch(
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
  ).then((res) => {
    res.json().then((data) => {
      renderData(data);
    });
  });
  function renderData(dataToRender) {
    console.log(dataToRender);
    const toRenderDiv = document.getElementById("ourAlumni");
    dataToRender.forEach((eachUser) => {
      toRenderDiv.innerHTML += `
            <div id='${eachUser.id}' class="col-lg-8 my-2">
                <div class='row border border-1'>
                    <center>
                        <img style="width:120px !important; height:120px !important; margin:20px;" class='w-100 h-100' src='./assets/img/user.webp'>
                    </center>
                    <div class='col-lg-12'>
                    <a class="portfolio-item border" href="#!">
                        <div class="">
                            <div class="">
                                <div class="h2">${eachUser.name}</div>
                                <ul class="mb-0 text-justify">
                                    <li>username: ${eachUser.username}</li>
                                    <li>Phone Number: ${
                                      eachUser.phone.split(" ")[0]
                                    }</li>
                                    <li>Email: ${eachUser.email}</li>
                                    <li>Website: ${eachUser.website}</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            `;
    });
  }
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle("active");
    _toggleMenuIcon();
    menuToggle.classList.toggle("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(
    document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger")
  );
  scrollTriggerList.map((scrollTrigger) => {
    scrollTrigger.addEventListener("click", () => {
      sidebarWrapper.classList.remove("active");
      menuToggle.classList.remove("active");
      _toggleMenuIcon();
    });
  });

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector(
      ".menu-toggle > .fa-bars"
    );
    const menuToggleTimes = document.body.querySelector(
      ".menu-toggle > .fa-xmark"
    );
    if (menuToggleBars) {
      menuToggleBars.classList.remove("fa-bars");
      menuToggleBars.classList.add("fa-xmark");
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove("fa-xmark");
      menuToggleTimes.classList.add("fa-bars");
    }
  }

  // Scroll to top button appear
  document.addEventListener("scroll", () => {
    const scrollToTop = document.body.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 100) {
      if (!scrollToTopVisible) {
        fadeIn(scrollToTop);
        scrollToTopVisible = true;
      }
    } else {
      if (scrollToTopVisible) {
        fadeOut(scrollToTop);
        scrollToTopVisible = false;
      }
    }
  });
});

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

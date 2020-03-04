import '../styles/index.scss';

const toggleButton = document.querySelector('.btn-toogle-nav');
let toggleStatus = false;

const formDatetimeToday = document.querySelector('.today');
const formDatetimeTomorrow = document.querySelector('.tomorrow');
formDatetimeToday.valueAsDate = new Date();
const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
formDatetimeTomorrow.valueAsDate = tomorrow;

const toggleNav = function() {
  const getSidebar = document.querySelector('.nav-sidebar');
  const getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

  if (toggleStatus === false) {
    getSidebar.style.visibility = 'visible';
    getSidebar.style.width = '280px';

    setTimeout(function() {
      getSidebarLinks.forEach(link => {
        link.style.opacity = '1';
      });
    }, 200);

    toggleStatus = true;
  } else if (toggleStatus === true) {
    getSidebar.style.width = '0px';

    getSidebarLinks.forEach(link => {
      link.style.opacity = '0';
    });

    getSidebar.style.visibility = 'hidden';

    toggleStatus = false;
  }
};

toggleButton.addEventListener('click', toggleNav);

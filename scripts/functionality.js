const menuButton = document.querySelector('.js-menu-container');
const sideBar = document.querySelector('.js-sidebar');
let displayingSidebar = false;

// Function to open sidebar
function openSidebar() {
  sideBar.classList.add('show');
  document.body.style.overflow = 'hidden'; // Disable scrolling
  displayingSidebar = true;
}

// Function to close sidebar
function closeSidebar() {
  sideBar.classList.remove('show');
  document.body.style.overflow = ''; // Enable scrolling again
  displayingSidebar = false;
}

// Toggle sidebar on menu button click
if (menuButton && sideBar) {
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // prevent closing immediately
    if (!displayingSidebar) {
      openSidebar();
    } else {
      closeSidebar();
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (event) => {
    if (
      displayingSidebar &&
      !sideBar.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeSidebar();
    }
  });
} else {
  console.log('button or sidebar not found!');
}

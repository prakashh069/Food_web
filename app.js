document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainMenus = document.querySelector('.main-filter');
    const backMenusArrow = document.querySelector('.back-menus');
    const filterItems = document.querySelectorAll('.filter-item');
    const detailCards = document.querySelectorAll('.detail-card');
  
    // Toggle sidebar when hamburger icon is clicked
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  
    // Toggle main-menus when main-filter title is clicked
    mainMenus.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  
    // Add event listener for back arrow in main-menus
    backMenusArrow.addEventListener('click', function () {
      mainMenus.classList.remove('active');
    });
  
    // Add event listeners for filter items
    filterItems.forEach(function (filterItem) {
      filterItem.addEventListener('click', function () {
        // Remove active class from all filter items
        filterItems.forEach(function (item) {
          item.classList.remove('active');
        });
  
        // Add active class to clicked filter item
        this.classList.add('active');
  
        // Filter detail cards based on selected filter item
        const filterValue = this.getAttribute('data-filter');
        detailCards.forEach(function (card) {
          if (filterValue === 'all') {
            card.style.display = '';
          } else {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === cardCategory) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  });
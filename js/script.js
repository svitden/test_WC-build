const pageScroll = document.getElementsByClassName('page-header__scroll')[0];

const aboutUs = document.getElementById('about-us');

const handleScrollClick = (event) => {
  event.preventDefault();
  aboutUs.scrollIntoView({ block: "start", behavior: "smooth" });
}
  
pageScroll.addEventListener('click', handleScrollClick);


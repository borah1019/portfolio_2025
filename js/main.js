gsap.registerPlugin(ScrollTrigger);

/* HEADER */
const gnbList = document.querySelectorAll('.gnb li');
const sectionList = document.querySelectorAll('section');

gnbList.forEach(function (e, i) {
  e.addEventListener('click', function () {
    const sectionTop = sectionList[i].offsetTop;
    window.scrollTo({
      top: i == 0 ? sectionTop - 86 : sectionTop,
      behavior: 'smooth'
    });
  })
})

const btnAllMenu = document.querySelector('.btn_all_menu');
const allMenu = document.querySelector('.all_menu');
const allMenuList = document.querySelectorAll('.all_menu li');

function addClassOn () {
  btnAllMenu.classList.add('on');
  allMenu.classList.add('on');
}

function removeClassOn () {
  btnAllMenu.classList.remove('on');
  allMenu.classList.remove('on');
}

function handleClassOn (element) {
  if (element.classList.contains('on')) {
    removeClassOn();
  } else {
    addClassOn();
  }
}

btnAllMenu.addEventListener('click', function () {
  handleClassOn(this);
});

allMenuList.forEach(function (e, i) {
  e.addEventListener('click', function () {
    const sectionTop = sectionList[i].offsetTop;
    window.scrollTo({
      top: i == 0 ? sectionTop - 86 : sectionTop,
      behavior: 'smooth'
    });
    handleClassOn(btnAllMenu);
  })

})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1280) {
    removeClassOn();
  }
})

/* Sec01_about */
const intro1Animation = gsap.timeline();
intro1Animation.to('.intro_1 *', {
  y: 20,
  opacity: 0,
  stagger: 0.1
})

ScrollTrigger.create({
  trigger: '.sec01_about',
  animation: intro1Animation,
  start: '10px 86px',
  end: '7% 86px',
  scrub: 1,
  // markers: true
})

const intro2Animation = gsap.timeline();
intro2Animation.from('.intro_2 span', {
  opacity: 0,
  scale: 50,
  duration: 3,
  ease: 'power1.out',
})

ScrollTrigger.create({
  trigger: '.sec01_about',
  animation: intro2Animation,
  start: '86px 86px',
  end: '7.5% 86px',
  scrub: 0.5,
  // markers: true
})

const intro2SkillsAnimation = gsap.timeline();
intro2SkillsAnimation.from('.intro_2 .skills li', {
  opacity: 0,
  x: 2000,
  stagger: 0.3
}).to('.intro_2 .skills li', {
  opacity: 0,
  x: -2000,
  stagger: 0.3,
  duration: 3
})

ScrollTrigger.create({
  trigger: '.sec01_about',
  animation: intro2SkillsAnimation,
  start: '25% 86',
  end: 'bottom -=3%',
  scrub: 0.3,
  // markers: true
})

/* Sec02_web */
const webTabs = document.querySelectorAll('.sec02_web .web_tabs li');
const webProjects = document.querySelectorAll('.sec02_web .web_projects>li');

webTabs.forEach(function (webTab, i) {
  webTab.addEventListener('click', function () {
    webTabs.forEach(function (webTab) {
      webTab.classList.remove('on');
    })
    webProjects.forEach(function (webProject) {
      webProject.classList.remove('on');
    })

    webTabs[i].classList.add('on');
    webProjects[i].classList.add('on');
  })
})


/* Sec03_javascript */
const javascriptTabs = document.querySelectorAll('.sec03_javascript .javascript_tabs li');
const javascriptProjects = document.querySelectorAll('.sec03_javascript .javascript_projects>li');

javascriptTabs.forEach(function (javascriptTab, i) {
  javascriptTab.addEventListener('click', function () {
    javascriptTabs.forEach(function (javascriptTab) {
      javascriptTab.classList.remove('on');
    })
    javascriptProjects.forEach(function (javascriptProject) {
      javascriptProject.classList.remove('on');
    })

    javascriptTabs[i].classList.add('on');
    javascriptProjects[i].classList.add('on');
  })
})

/* Sec04_graphic */
const graphicBox = document.querySelector('.sec04_graphic .graphic_project:first-of-type');
const graphics = document.querySelectorAll('.sec04_graphic .graphic_project:first-of-type>li');
const graphicCloseBtn = document.querySelector('.sec04_graphic .btn_close');
const graphicTexts = document.querySelectorAll('.sec04_graphic .project_txt');

gsap.from(graphics, {
  scale: .7,
  y: 200,
  opacity: 0,
  stagger: .5,
  duration: 1,
  rotation: '8deg',
  scrollTrigger: {
    trigger: graphicBox,
    start: "top 75%",
    end: "bottom bottom+=5",
    toggleActions: 'restart none reverse none',
    scrub: 1,
    // markers: true
  }
});

function handleGraphicTextList (state) {
  graphicTexts.forEach(function (graphicText) {
    graphicText.style.display = state;
  });
}

function closeGrraphicModal() {
  graphicCloseBtn.style.display = 'none';
  graphicBox.classList.remove('modal_pc');
  graphics.forEach(function (graphic) {
    graphic.style.display = 'flex';
    graphic.classList.remove('modal_m');
  });
  handleGraphicTextList('none');
}

window.addEventListener('resize', function () {
  closeGrraphicModal();
})

window.addEventListener('scroll', function () {
  const graphicSectionTop = sectionList[3].offsetTop;
  if (window.scrollY + 128 <= graphicSectionTop) {
    closeGrraphicModal();
  }
})

let windowWidth = window.innerWidth;

graphics.forEach(function (graphic, i) {
  graphic.addEventListener('click', function() {
    window.addEventListener('resize', function() {
      windowWidth = window.innerWidth;
    })
    graphicCloseBtn.style.display = 'flex';
    if (windowWidth >= 800) {
      graphicBox.classList.add('modal_pc');
    } else {
      graphic.classList.add('modal_m');
    }
    graphics.forEach(function (graphic) {
      graphic.style.display = 'none';
    })
    graphics[i].style.display = 'flex';
    handleGraphicTextList('grid');
  })
})

graphicCloseBtn.addEventListener('click', function () {
  closeGrraphicModal();
})

/* Sec05_contact */
const infoList = document.querySelectorAll('.sec05_contact .info_list>li');

function closeContactInfoList () {
  infoList.forEach(function (list) {
    const closeListHeight = `${list.querySelector('span:first-child').clientHeight}px`;
    list.classList.remove('on');
    list.style.height = closeListHeight;
  });
}

infoList.forEach(function (list) {
  let openListHeight;
  function getListHeight () {
    openListHeight = `${list.querySelector('span:first-child').clientHeight + list.querySelector('span:last-child').clientHeight}px`;
  }

  window.addEventListener('resize', function () {
    closeContactInfoList();
  })
    
  list.addEventListener('click', function () {
    if (list.classList.contains('on')) {
      closeContactInfoList();
    } else {
      closeContactInfoList();
      list.classList.add('on');
      getListHeight();
      list.style.height = openListHeight;
    }
  })
})
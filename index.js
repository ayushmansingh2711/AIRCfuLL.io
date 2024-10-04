document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
  
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        item.classList.remove('active');
      } else {
        document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.question').forEach(ques => ques.classList.remove('active'));
        answer.style.display = 'block';
        item.classList.add('active');
      }
    });
  });

  // Hamburger menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const body1 = document.getElementById('body1');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      body1.classList.toggle('move');
    });
  });
  


//   const hamburger = document.getElementById('hamburger');
//   const navLinks = document.getElementById('nav-links');
//   const body1=document.querySelector('.landing');


//   hamburger.addEventListener('click', () => {
//     // console.log('hello')
//     navLinks.classList.toggle('show');
//     body1.classList.toggle('move');
// });

// setTimeout(() => {
//   hamburger.click()
// }, (3000));
// hamburger.addEventListener('click', () => {
//     console.log('hello')
// })
// console.log('object')

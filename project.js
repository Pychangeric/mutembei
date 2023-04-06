

// Fetch university data from API
fetch('http://localhost:3000/universities')
  .then(response => response.json())
  .then(data => {
    // Create the swiper wrapper element
    const swiperWrapper = document.getElementById('swiper-wrapper');
    
    // Loop through the university data and create slide elements
    data.forEach(university => {
      // Create the slide element
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      
      // Create the university poster element
      const poster = document.createElement('img');
      poster.src = university.poster;
      poster.alt = university.name;
      slide.appendChild(poster);
      
      // Create the university details element
      const details = document.createElement('div');
      details.classList.add('details');
      
      const name = document.createElement('h2');
      name.textContent = university.name;
      details.appendChild(name);
      
      const country = document.createElement('p');
      country.textContent = `Country: ${university.country}`;
      details.appendChild(country);
      
      const website = document.createElement('p');
      website.innerHTML = `Website: <a href="${university.web_pages[0]}" target="_blank">${university.web_pages[0]}</a>`;
      details.appendChild(website);
      
      const alphaTwoCode = document.createElement('p');
      alphaTwoCode.textContent = `Alpha Two Code: ${university.alpha_two_code}`;
      details.appendChild(alphaTwoCode);
      
      slide.appendChild(details);
      
      // Append the slide element to the swiper wrapper
      swiperWrapper.appendChild(slide);
    });
    
    // Initialize the swiper
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  })
  .catch(error => {
    console.error(error);
  });

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[slideIndex - 1].classList.add("active");
}


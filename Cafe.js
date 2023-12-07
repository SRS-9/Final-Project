let currentCard = 0;


function currentSlide(n) {
  showSlides((currentCard = n - 1));
}


function showSlides(n) {
  const slides = document.getElementsByClassName("bread-card");
  const dots = document.getElementsByClassName("dot");
  const isMobile = window.matchMedia(
    "only screen and (max-width: 600px)"
  ).matches;

  if (n >= slides.length) currentCard = 0;
  if (n < 0) currentCard = slides.length - 1;

  if (isMobile) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentCard].style.display = "block";
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"; 
    }
  }

  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (isMobile) {
    dots[currentCard].className += " active";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(currentCard);
});

window.addEventListener("resize", () => {
  showSlides(currentCard);
});

let currentPost = 0;


function currentTestimonialSlide(n) {
  showTestimonialSlides((currentPost = n - 1));
}


function showTestimonialSlides(n) {
  const postSlides = document.getElementsByClassName("post");
  const postDots = document.getElementsByClassName("postDot");

  if (n >= postSlides.length) currentPost = 0;
  if (n < 0) currentPost = postSlides.length - 1;

 
    for (let i = 0; i < postSlides.length; i++) {
      postSlides[i].style.display = "none";
    }
    postSlides[currentPost].style.display = "block";
  

  
  for (let i = 0; i < postDots.length; i++) {
    postDots[i].className = postDots[i].className.replace(" active", "");
  }
    postDots[currentPost].className += " active";

}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonialSlides(currentPost);
});

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu-list").classList.toggle("show");
  });

  document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    document.getElementById("reservationForm").style.display = "none";

    document.getElementById("thankYouMessage").style.display = "block";

    document.getElementById("closeButton").addEventListener("click", function () {
      
    document.getElementById("thankYouMessage").style.display = "none";

    document.getElementById("reservationForm").style.display = "block";

    document.getElementById("reservationForm").reset();
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const cartModalOverlay = document.getElementById('cartModalOverlay');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');
    const closeCartButton = document.getElementById('closeCart');
  
    let total = 0;
  
    function updateCartCount(count) {
      cartCount.textContent = count;
    }
  
    function updateCartModal(itemName, itemPrice) {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-from-cart');
      removeButton.addEventListener('click', () => {
        cartItemsList.removeChild(cartItem); 
        total -= itemPrice;
        cartTotal.textContent = `$${total.toFixed(2)}`;
        updateCartCount(cartItemsList.children.length); 
      });
  
      cartItem.appendChild(removeButton);
      cartItemsList.appendChild(cartItem);
  
      total += itemPrice;
      cartTotal.textContent = `$${total.toFixed(2)}`;
      updateCartCount(cartItemsList.children.length); 
    }
  
    addToCartButtons.forEach(addButton => {
      addButton.addEventListener('click', () => {
        const menuItem = addButton.parentNode.querySelector('.menu-title').textContent;
        const itemPrice = parseFloat(addButton.parentNode.querySelector('.price').textContent.slice(1));
        updateCartModal(menuItem, itemPrice); 
      });
    });
  
    document.getElementById('shopping-cart').addEventListener('click', () => {
      cartModalOverlay.style.display = 'block';
    });
  
    closeCartButton.addEventListener('click', () => {
      cartModalOverlay.style.display = 'none';
    });
  });
  
  
  




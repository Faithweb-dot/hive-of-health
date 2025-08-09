// cart.js - Simple cart logic for Hive of Health

// Get cart from localStorage or initialize
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  setCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
  });
}

// Attach event listeners to Add to Cart buttons
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = this.getAttribute('data-product-name');
      // Find the select element for size/variant within the same product card
      const select = productCard.querySelector('select');
      let selectedOption = select ? select.options[select.selectedIndex].text : '';
      // Extract size and price from option text (e.g., '16oz - $24.99')
      let size = '', price = '';
      if (selectedOption.includes(' - ')) {
        [size, price] = selectedOption.split(' - ');
      } else {
        size = selectedOption;
        price = this.getAttribute('data-base-price') || '';
      }
      // Remove currency symbol and convert to Naira if needed
      price = price.replace(/[^\d.]/g, '');
      // Compose product object
      const product = {
        name: productName,
        size: size.trim(),
        price: price,
        quantity: 1
      };
      addToCart(product);
      // Add cart animation
      this.textContent = 'Added!';
      this.classList.add('bg-accent');
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.classList.remove('bg-accent');
      }, 2000);
    });
  });
});

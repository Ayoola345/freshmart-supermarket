document.addEventListener('DOMContentLoaded', () => {

  const footerYear = document.getElementById('footer-year');

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  const searchInput = document.getElementById('product-search');
  const productCards = document.querySelectorAll('.products-grid .card');

  if (searchInput && productCards.length) {

    searchInput.addEventListener('input', (event) => {

      const query = event.target.value.trim().toLowerCase();

      productCards.forEach((card) => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(query) ? '' : 'none';

      });

    });

  }

});

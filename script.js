// Section toggler
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

const products = [
  { name: "Smartphone", category: "electronics", price: 500, rating: 4.5 },
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.7 },
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.0 },
  { name: "Sneakers", category: "clothing", price: 60, rating: 4.3 },
  { name: "Watch", category: "accessories", price: 150, rating: 4.6 }
];

function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  productList.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating} ⭐</p>
      </div>`;
  });
}

function filterAndSortProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;
  let filtered = category === "all" ? [...products] : products.filter(p => p.category === category);

  if (sort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "ratingHigh") filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === "ratingLow") filtered.sort((a, b) => a.rating - b.rating);

  displayProducts(filtered);
}

displayProducts(products);

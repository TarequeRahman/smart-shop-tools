const reviews = [
  {
    name: "Sarah Khan",
    rating: 5,
    comment: "Absolutely loved the quality! Fast delivery and well packed.",
    date: "Oct 25, 2025"
  },
  {
    name: "Rafi Ahmed",
    rating: 4,
    comment: "Good product, but size runs a bit small.",
    date: "Oct 20, 2025"
  },
  {
    name: "Joya Rahman",
    rating: 5,
    comment: "Excellent! Looks exactly like the photo.",
    date: "Oct 10, 2025"
  },
  {
    name: "Tanvir Hasan",
    rating: 4,
    comment: "Satisfied overall. Customer support was great.",
    date: "Sep 30, 2025"
  }
];

const renderStars = (count) => {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<input type="radio" class="mask mask-star-2 bg-yellow-400" ${i <= count ? "checked" : ""} disabled />`;
  }
  return stars;
}

document.addEventListener("DOMContentLoaded", () => {
  const reviewContainer = document.getElementById("review-container");
  
  if (!reviewContainer) return;

  // Render each review card
  reviews.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-md hover:shadow-lg";
    card.innerHTML = `
      <div class="card-body">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold text-lg">${r.name}</h3>
          <span class="text-sm text-gray-500">${r.date}</span>
        </div>
        <div class="rating mb-2">${renderStars(r.rating)}</div>
        <p class="text-gray-600 text-left">${r.comment}</p>
      </div>
    `;
    reviewContainer.appendChild(card);
  });
});

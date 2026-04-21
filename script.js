const personas = {
  Free: {
    name: "Casual Casey",
    bio: "Watches movies on phone during commutes. Rarely reviews. Uses LetterBoxd to find what's popular before streaming.",
    habits: "Mobile-only, no reviews, small watchlist, uses search & home page.",
    device: "Android / iOS App",
    favGenre: "Action / Comedy",
    churnRisk: "High to Critical",
    revenue: "$0",
    quote: "I just wanna know if a movie is worth my time."
  },
  Pro: {
    name: "Dedicated Dana",
    bio: "Weekly movie logger. Writes short, honest reviews. Follows friends and a few critics. Loves stats.",
    habits: "Logs 10–15 movies/month, writes reviews, uses mobile + desktop.",
    device: "Mix: iOS App + Windows/macOS",
    favGenre: "Horror / Drama / Thriller",
    churnRisk: "Low",
    revenue: "$10/mo",
    quote: "My diary is my memory. Pro is worth it for the stats."
  },
  Patron: {
    name: "Curator Chris",
    bio: "Film school grad or serious cinephile. Creates elaborate lists, follows 1000+ people, writes long-form reviews.",
    habits: "Daily use, desktop-first, huge watchlist, edits reviews, shares lists.",
    device: "Desktop (macOS/Windows) + Tablet",
    favGenre: "Noir / Western / Foreign / Classics",
    churnRisk: "Zero",
    revenue: "$25/mo",
    quote: "LetterBoxd is my legacy. Patron supports the craft."
  }
};

function showPersona(tier) {
  const p = personas[tier];
  const card = document.getElementById('persona-card');
  card.className = `persona-card ${tier.toLowerCase()}-bg`;
  card.innerHTML = `
    <h2>${p.name}</h2>
    <p><strong>🎭 Bio:</strong> ${p.bio}</p>
    <p><strong>📱 Habits:</strong> ${p.habits}</p>
    <p><strong>💻 Device:</strong> ${p.device}</p>
    <p><strong>❤️ Fav Genre:</strong> ${p.favGenre}</p>
    <p><strong>⚠️ Churn Risk:</strong> ${p.churnRisk}</p>
    <p><strong>💰 Revenue:</strong> ${p.revenue}</p>
    <blockquote>“${p.quote}”</blockquote>
    <hr>
    <small>📊 Based on real LetterBoxd user segmentation (n=20)</small>
  `;
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => showPersona(btn.dataset.tier));
});

// Load default
showPersona('Free');
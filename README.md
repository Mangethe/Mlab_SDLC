# 🎬 LetterBoxd User Persona Explorer

## 📌 Project Overview

This project was developed as part of a **product development workshop** organised by **Mlab** in partnership with **GIZ**. The goal was to apply the full product lifecycle (from stakeholder analysis to deployment) using real-world user data from **LetterBoxd**, a social platform for film lovers.

We segmented 20 LetterBoxd users by **subscription tier** (Free, Pro, Patron) and created **data-driven user personas** to understand behaviours, habits, and churn risk.

---

## 🧠 Workshop Learnings (SDLC Applied)

| Phase | Activity |
| ------- | ---------- |
| 1. Planning | Acted as BA: interviewed stakeholders, defined segmentation (Sub Tier), created wireframes |
| 2. Analysis | UX/DBA team: analysed usage patterns, session length, watchlist size, social connections |
| 3. Design | Built low-fidelity wireframe → high-fidelity prototype (cards, colours, layout) |
| 4. Implementation | Coded HTML/CSS/JS app, hosted on GitHub Pages |
| 5. Testing | Validated persona switching, responsiveness, and data accuracy |
| 6. Deployment | Published live via GitHub Pages |
| 7. Maintenance | Ready for future enhancements (database, more segments, analytics) |

---

## 🗺 User Story Mapping

### Epic: *Enable film lovers to track, share, and discover movies based on their engagement level*

| User Role | Activity | Story | Priority |
| ----------- | ---------- | ------- | ---------- |
| **Free user** | Discover trending | As a free user, I want to see trending movies so I can decide what to watch effortlessly. | Must have |
| | Quick rating | As a free user, I want to give a star rating without writing a review. | Must have |
| **Pro user** | Yearly stats | As a Pro user, I want to see my Year in Review charts to share on social media. | Must have |
| | Filtering | As a Pro user, I want to filter my feed by "friends only". | Should have |
| **Patron user** | Unlimited lists | As a Patron user, I want to create unlimited custom lists (up to 10k items). | Must have |
| | Customization | As a Patron user, I want to customize my profile with movie backdrops. | Should have |

### 🧩 User Journey Map

**Free → Pro → Patron** progression triggers:

1. **Awareness:** User sees a friend's "Year in Review" stats.
2. **Trial:** User signs up (free), uses watchlist and ratings.
3. **Engagement:** User writes first review, receives social validation (likes).
4. **Conversion (Pro):** User wants deeper stats and filtering after ~3 months.
5. **Power Use:** User hits list limits, leading to **Patron** conversion.

---

## 🔍 Key Insights from Data

| Metric | Free Tier | Pro Tier | Patron Tier |
| -------- | ----------- | ---------- | -------------- |
| Avg Watchlist Size | 55 | 580 | 5,066 |
| Avg Social Connections | 8 | 268 | 2,133 |
| Avg Session Length | 19 min | 53 min | 118 min |
| Churn Risk | High | Low | Zero |

**Conclusion:** Watchlist size, social engagement, and session duration are the strongest predictors of subscription willingness.

---

## Data Source

**Dataset:** `Case Study_LetterBoxd.xlsx`  
**Users:** 20 anonymized accounts  
**Key fields:** Sub Tier, Movies Watched, Avg Reviews/Mo, Session Length, Watchlist Size, Social Connections, Churn Risk

---

## 👥 Personas Created

### 🆓 Free Tier – Casual Casey

> *"I just wanna know if a movie is worth my time."*

- **Habits:** Mobile-only, rarely reviews, uses search & home page  
- **Churn Risk:** High → Critical  
- **Revenue:** $0  

### ⭐ Pro Tier – Dedicated Dana

> *"My diary is my memory. Pro is worth it for the stats."*

- **Habits:** Logs 10–15 movies/month, writes reviews, uses mobile + desktop  
- **Churn Risk:** Low  
- **Revenue:** $10/month  

### 👑 Patron Tier – Curator Chris

> *"LetterBoxd is my legacy. Patron supports the craft."*

- **Habits:** Daily use, desktop-first, huge watchlist, writes long reviews  
- **Churn Risk:** Zero  
- **Revenue:** $25/month  

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/mangethe/Mlab_SDLC.git
cd Mlab_SDLC
open index.html
```

---

## 🚀 Live Demo

👉 [View the Persona Explorer](https://mangethe.github.io/Mlab_SDLC)

## 🛠️ Tech Stack

- HTML5  
- CSS3 (custom properties, flexbox, card design)  
- Vanilla JavaScript (no frameworks)  
- GitHub Pages (hosting)

---

## 📂 Repo Structure

Mlab_SDLC/

├── index.html

├── personas.html

├── data/

│   └── users.json          ← generated using convert_to_json.py script

├── convert_to_json.py      ← (run only after new updates to the users)

├── script.js

├── style.css

└── README.md

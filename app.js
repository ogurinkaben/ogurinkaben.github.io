const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  }
};

const getSavedTheme = () => localStorage.getItem("theme");

const initTheme = () => {
  const saved = getSavedTheme();
  const theme =
    saved === "light" || saved === "dark" ? saved : getSystemTheme();

  applyTheme(theme);
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  localStorage.setItem("theme", next);
  applyTheme(next);
};

const initThemeToggle = () => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", toggleTheme);
};

document.getElementById("year").textContent = new Date().getFullYear();

initTheme();
initThemeToggle();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const saved = getSavedTheme();
    if (!saved) applyTheme(e.matches ? "dark" : "light");
  });

/* Blog */
const fetchDevToPosts = async () => {
  const container = document.getElementById("blog-posts");

  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=ogurinkaben&per_page=5",
    );

    const posts = await res.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      container.innerHTML = "<p class='muted'>No posts found.</p>";
      return;
    }

    container.innerHTML = posts
      .map((post) => {
        const image = post.cover_image;

        return `
          <a class="blog-card" href="${post.url}" target="_blank" rel="noreferrer">
            ${
              image
                ? `<div class="blog-image">
                    <img src="${image}" alt="${post.title}" loading="lazy" />
                  </div>`
                : ""
            }

            <div class="blog-content">
              <div class="blog-title">${post.title}</div>
              <div class="blog-meta">
                ${new Date(post.published_at).toDateString()} · ${
                  post.reading_time_minutes
                } min read
              </div>
            </div>
          </a>
        `;
      })
      .join("");
  } catch (err) {
    container.innerHTML =
      "<p class='muted'>Unable to load posts right now.</p>";
  }
};

fetchDevToPosts();

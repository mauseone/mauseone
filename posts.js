const posts = [
  { title: "Shooting Hong Kong", file: "post-01.html" },
  { title: "Shooting Tokyo", file: "post-02.html" },
  { title: "Shooting Yogyakarta", file: "post-03.html" }
];

function buildPostNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const otherPosts = posts.filter(post => post.file !== currentPage);

  const nav = document.querySelector(".post-nav-links");
  if (!nav) return;

  nav.innerHTML = otherPosts
    .map(post => `<a href="${post.file}">${post.title}</a>`)
    .join("");
}

buildPostNav();
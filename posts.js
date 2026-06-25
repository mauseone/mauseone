const posts = [
  { title: "Shooting Hong Kong", file: "03-HongKong.html" },
  { title: "Shooting Tokyo", file: "02-Tokyo.html" },
  { title: "Shooting Yogyakarta", file: "01-Jogja.html" }
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
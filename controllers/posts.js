const posts = require("../db/db.js");

const index = (req, res) => {
  // uso format per abbreviare la content negotiation
  res.format({
    html: () => {
      // Usando il METODO MAP
      const htmlPosts = [
        "<h1>Feed</h1>",
        "<ul>",

        // spred operator dell'array nel json
        ...posts.map(
          (post) => `<li>
            <h3>${post.title}</h3>
            <img src="/img/posts/${post.image}" alt="${post.title}" />
            <ul>
              <li>${post.content}</li>
              <li>
                <ol>${post.tags.map((tag) => `<li>${tag}</li>`).join("")}</ol>
              </li>
            </ul>
          </li>`
        ),
        "</ul>",
      ];

      // send anziche end
      res.type("html").send(htmlPosts.join(""));
    },
  });
};

module.exports = { index };

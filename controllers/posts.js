// Istanza del file json
const feed = require("../db/posts.json");

const index = (req, res) => {
  // uso format per abbreviare la content negotiation
  res.format({
    html: () => {
      // Usando il CICLO FOR OF
      //   const htmlPosts = ["<h1>Feed</h1>"];

      //   htmlPosts.push("<ul>");

      //   for (const post of feed) {
      //     htmlPosts.push(`<li>
      //     <h3>${post.titolo}</h3>
      //     <img src="/img/posts/${post.immagine}
      //     </li>`);
      //   }
      //   htmlPosts.push("</ul>");

      // Usando il METODO MAP
      const htmlPosts = [
        "<h1>Feed</h1>",
        "<ul>",

        // spred operator dell'array nel json
        ...feed.map(
          (post) => `<li>
            <h3>${post.titolo}</h3>
            <img src="/img/posts/${post.immagine}" alt="${post.titolo}" />
            <ul>
              <li>${post.contenuto}</li>
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
    json: () => {
      // oppure per json anche res.json()
      res.type("json").send({ feed });
    },
  });
};

module.exports = { index };

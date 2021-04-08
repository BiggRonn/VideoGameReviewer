

app.get("/api/search", async function (req, res) {

  try {
    const slug = document.querySelector('#game-title').toLowerCase().replaceText(' ', '-');

    gameInfo = [];
    apiKey = process.env.API_KEY
    const url = `https://api.rawg.io/api/games/${slug}?key${apiKey}`

    var rawgData = await axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    })

    res.setHeader("Content-Type", "application/json");
    rawgData.data.pipe(res);

  } catch (err) {
    res.json(err);
  }




})

// app.get("/api/search", async function (req, res) {
//     try {
//       const query = req.url.split("?")[1];
//       const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&${query}`;
//   ​
//       const data = await axios({
//         method: "get",
//         url: url,
//         responseType: "stream",
//       });
//   ​
//       res.setHeader("Content-Type", "application/json");
//       data.data.pipe(res);

//     } catch (err) {
//       res.json(err);
//     }
//   });


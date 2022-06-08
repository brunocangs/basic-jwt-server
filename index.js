const main = async () => {
  const express = require("express");
  const app = express();
  const jsonwebtoken = require("jsonwebtoken");

  app.use(express.json());

  app.get("/", async (req, res) => {
    let {
      amount = 4567,
      wallet = "0x113DB5773f8a96E5cFc56850a14035b0EA20574e",
    } = req.query;
    amount = +amount * Math.pow(10, 8);
    const token = await jsonwebtoken.sign(
      {
        user_id: 1,
        wallet,
        amount,
      },
      "secret",
      { issuer: "app.ribus.com.br", expiresIn: "2h", algorithm: "HS256" }
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ token });
  });

  app.post("/validate", async (req, res) => {
    try {
      const jwt = req.body.token;
      const jwtResponse = await jsonwebtoken.verify(jwt, "secret");
      res.json(jwtResponse);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
  });
};
main();

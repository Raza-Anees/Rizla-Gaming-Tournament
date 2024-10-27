const express = require("express");
const cors = require("cors"); // Ensure cors is required
const app = express();

const User = require("./Models/User.js");
const { validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Allahisone1@";

// Middleware
app.use(express.json());

// Import your Pubg model and database
const Pubg = require("./Models/Pubg");
const FreeFire = require("./Models/Freefire");
require("./db/db.js");

// Enable CORS and configure it to allow specific origin
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/gaming/pubg", async (req, res) => {
  try {
    let user = new Pubg(req.body);
    let result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Error saving PUBG data" });
  }
});

app.post("/gaming/tekken8", async (req, res) => {
  try {
    let user = new Pubg(req.body);
    let result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Error saving Tekken data" });
  }
});

app.post("/gaming/freefire", async (req, res) => {
  try {
    let user = new FreeFire(req.body);
    let result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Error saving FreeFire data" });
  }
});

//ROUTE1: Creat a User Using Post "/api/auth/createuser". no login required
app.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // id there are errors return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(404).json({ result: result.array() });
    }
    try {
      // check whether the user with this email exist already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(404).json({ result: "sorry user already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: { id: user.id },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log({ authToken });

      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//ROUTE:2 Creat a User Using Post "/api/auth/login". no login required
app.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(404).json({ result: result.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ result: "please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(404)
          .json({ result: "please try to login with correct credentials" });
      }
      const data = {
        user: {
          name: user.name,
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log({ authToken });

      res.json({ authToken, username: user.name });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

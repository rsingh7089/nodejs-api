const express = require("express");
const testRoute = require("./routes/testRoute");

const app = express();
const PORT = 7000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", testRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

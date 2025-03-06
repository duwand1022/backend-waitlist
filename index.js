// server.js
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors({ origin: "*" })); // Enable CORS for all origins
app.use(express.json());

// Waitlist API endpoint
app.post("/api/waitlist", async (req, res) => {
  const { apiKey, audienceId, firstName, lastName, email } = req.body;

  if (!apiKey || !audienceId || !firstName || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const resend = new Resend(apiKey);

  try {
    // Add user to Resend audience
    await resend.contacts.create({
      audienceId,
      email,
      firstName,
      lastName,
    });

    res.status(200).json({ message: "Successfully joined the waitlist!" });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Failed to join the waitlist. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

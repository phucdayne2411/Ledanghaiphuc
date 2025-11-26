const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// body parser
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// test API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!", time: Date.now() });
});

app.post("/api/echo", (req, res) => {
  res.json({
    received: req.body,
    message: "Đã nhận dữ liệu POST!"
  });
});

// fallback cho SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Backend đang chạy tại http://localhost:${PORT}`);
});

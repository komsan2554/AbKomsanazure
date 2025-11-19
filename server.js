// server.js
import express from "express";
const app = express();

// serve static files from 'public' (ปรับชื่อโฟลเดอร์ถ้าไฟล์ของคุณอยู่ที่อื่น)
app.use(express.static("public"));

// simple health route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// fallback to index.html for SPA (ถ้าเป็น SPA)
app.get("*", (req, res) => {
  res.sendFile(new URL("./public/index.html", import.meta.url).pathname);
});

// listen on Azure assigned port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

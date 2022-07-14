import express from "express";

const app = express();

const server = app.listen(process.env.port || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});

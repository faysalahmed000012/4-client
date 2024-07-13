import cors from "cors";
import express, { Application } from "express";
import router from "./app/product.routes";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://4-7kgjwt6ra-faysalahmed000012s-projects.vercel.app/",
      "*",
    ],
    credentials: true,
  })
);

app.use("/products", router);

app.get("/", (req, res) => {
  res.send(`Green Horizon on ${process.env.PORT}`);
});

export default app;

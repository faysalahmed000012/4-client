import cors from "cors";
import express, { Application } from "express";
import router from "./app/product.routes";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://4-7kgjwt6ra-faysalahmed000012s-projects.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  })
);

app.use("/products", router);

app.get("/", (req, res) => {
  res.send(`Green Horizon on ${process.env.PORT}`);
});

export default app;

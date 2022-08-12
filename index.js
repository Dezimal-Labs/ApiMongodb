import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import source from "./sourceModel.js";
import news from "./newsModel.js";

//var moongose = require("mangoose");
//var dbURL = require("./properties").DB_URL;
mongoose.connect("mongodb://localhost:27017/local");

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB using MongooseJS");
});

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/sources", (req, res) => {
  source.find((err, sources) => {
    if (!err) {
      res.send(sources);
    } else {
      console.log("Error in retrieving users list :" + err);
    }
  });
});

app.get("/api/everything", (req, res) => {
  news.find((err, newsResult) => {
    if (!err) {
      let articles = [];

      if (req.query.sources) {
        let sourcesParam = req.query.sources;
        let sources = sourcesParam.split(",");

        sources.forEach((source) => {
          let articlesBySource = newsResult.filter((article) => {
            return article.source.id == source;
          });

          articles.push(...articlesBySource);
        });
        console.log(sources);
        res.send({ articles });
      } else {
        res.send(newsResult);
      }
    } else {
      res.send(err);
      console.log("Error in retrieving users list :" + err);
    }
  });
});
const port = process.env.port || 5003;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

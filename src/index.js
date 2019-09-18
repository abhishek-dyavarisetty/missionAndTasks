const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const missionTasksRouter = require("./routers/missionTask");

app.use(bodyParser.json());
app.use(missionTasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`server has been started on ${PORT}`));

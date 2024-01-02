const express = require("express");
const app = express();
const weatherRouter = require("./routers/weatherRouter")
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use("/",weatherRouter);

app.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`);
})
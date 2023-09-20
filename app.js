import express from 'express';

const app = express();

app.use(express.urlencoded());
app.use(express.json())


app.listen(2000)

console.log("node.js starting...")

app.use("/", (req,res) => {
    return res.status(200).json({ message: "Hello from AWS pipline !!"})
})
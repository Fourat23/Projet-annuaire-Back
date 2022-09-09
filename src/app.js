const express = require("express");
const cors = require("cors");
const contactsRouter = require("./contacts/contacts.router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});

const {Router} = require("express");
const { ContactsController } = require("./contacts.controller");
const contactsController = new ContactsController();
const contactsRouter = Router();

contactsRouter.get("/", contactsController.readAll);

contactsRouter.get("/:id", contactsController.readOne);

contactsRouter.post("/", contactsController.create);

contactsRouter.delete("/:id", contactsController.delete);

contactsRouter.put("/:id", contactsController.update);

module.exports = contactsRouter;
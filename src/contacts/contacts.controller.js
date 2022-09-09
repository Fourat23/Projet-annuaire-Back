const {response} = require("express");
const ContactsService = require("./contacts.service");

class ContactsController{
    constructor(){
        this.contactsService = new ContactsService();
    }

    readAll = async (_, response) => {
        const contacts = await this.contactsService.readAll();
        return response.send(contacts);
    }

    readOne = async (request, response) => {
        try {
            const id = request.params.id
            const contacts = await this.contactsService.readOne(id);
            response.send(contacts);
        } catch(e) {
            response.status(404).send(e.message);
        }
    }

    create(){

    }

    update(){

    }

    delete(){

    }
}

module.exports.ContactsController = ContactsController;
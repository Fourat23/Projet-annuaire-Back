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

    readOne(){

    }

    create(){

    }

    update(){

    }

    delete(){

    }
}

module.exports.ContactsController = ContactsController;
const ContactsRepository = require("./contacts.repository");

class ContactsService{
    constructor(){
        this.contactsRepository = new ContactsRepository();
    }

    readAll(){
        return this.contactsRepository.readAll();
    }

    readOne(id){

    }

    create(contactObj){

    }

    update(id, contactObj){

    }

    delete(id){

    }
}

module.exports = ContactsService;
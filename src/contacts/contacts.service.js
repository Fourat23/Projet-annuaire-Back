const ContactsRepository = require("./contacts.repository");

class ContactsService{
    constructor(){
        this.contactsRepository = new ContactsRepository();
    }

    readAll(){
        return this.contactsRepository.readAll();
    }

    async readOne(id){
        const contacts = await this.contactsRepository.readOne(id);
        if (!contacts) throw new Error(`Cannot find contact with id ${id}`);
        return contacts;
    }

    create(contactObj){

    }

    update(id, contactObj){

    }

    delete(id){

    }
}

module.exports = ContactsService;
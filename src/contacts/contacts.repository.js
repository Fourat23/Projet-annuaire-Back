const fs = require("fs/promises");

class ContactsRepository{
    async readAll(){
        const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
        return contacts
    }

    async readOne(id){
        const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
        return contacts[id];
    }

    async create(){

    }

    async update(id){

    }

    async delete(id){

    }
}

module.exports = ContactsRepository;
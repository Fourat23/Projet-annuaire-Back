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

    async updateOne(id, contactObj){
        const contacts = JSON.parse(await fs.readFile("./contacts.json", "utf-8"));
        contacts[id] = {id, ...contactObj };
        await fs.writeFile("./contacts.json", JSON.stringify(contacts));
    }

    async delete(id){

    }
}

module.exports = ContactsRepository;
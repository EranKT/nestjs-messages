import { readFile, writeFile } from "fs/promises";


export class MessagesRepository {
    databaseFile: string = 'messages.json';
    async findOne(id: string) {
        const contents = await readFile(this.databaseFile, 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile(this.databaseFile, 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async createMessage(content: string) {
        const contents = await readFile(this.databaseFile, 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };

        await writeFile(this.databaseFile, JSON.stringify(messages));
    }
}
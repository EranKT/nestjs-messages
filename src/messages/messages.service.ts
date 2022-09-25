import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        //DO NOT DO ON REAL APPS USE DEPS INJECT
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }
    createMessage(content: string) {
        return this.messagesRepo.createMessage(content);
    }
} 
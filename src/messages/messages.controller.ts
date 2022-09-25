import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        //DO NOT DO ON REAL APPS USE DEPS INJECT
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.createMessage(body.content);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }

}

import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    //check if the id exists
    const contents = await readFile('messages.json', 'utf-8'); //read file
    const messages = JSON.parse(contents); //convert to object
    return messages[id]; //return the entire message
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8'); //read file
    const messages = JSON.parse(contents); //convert to object
    return messages; //return the entire message
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8'); //read file
    const messages = JSON.parse(contents); //convert to object
    const id = Math.floor(Math.random() * 999); //create random id
    messages[id] = { id, content }; //add new message
    await writeFile('messages.json', JSON.stringify(messages)); //save file
    return JSON.stringify('Message created');
  }
}

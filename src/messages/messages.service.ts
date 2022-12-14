import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepository: MessagesRepository;
  constructor() {
    //Service is responsible for creating the repository
    //DONT DO THIS IN PRODUCTION
    this.messagesRepository = new MessagesRepository();
  }

  async findOne(id: string) {
    const message = await this.messagesRepository.findOne(id);
    return message;
  }

  async findAll() {
    const messages = await this.messagesRepository.findAll();
    return messages;
  }

  async create(content: string) {
    const id = await this.messagesRepository.create(content);
    return id;
  }
}

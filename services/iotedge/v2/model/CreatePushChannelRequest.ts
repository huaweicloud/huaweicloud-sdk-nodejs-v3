import { CreateChannelRequestDTO } from './CreateChannelRequestDTO';


export class CreatePushChannelRequest {
    public body?: CreateChannelRequestDTO;
    public constructor() { 
    }
    public withBody(body: CreateChannelRequestDTO): CreatePushChannelRequest {
        this['body'] = body;
        return this;
    }
}
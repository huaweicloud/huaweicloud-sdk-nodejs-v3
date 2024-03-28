import { CreateIefMessageChannelRequestBody } from './CreateIefMessageChannelRequestBody';


export class CreateIefMessageChannelRequest {
    public body?: CreateIefMessageChannelRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateIefMessageChannelRequestBody): CreateIefMessageChannelRequest {
        this['body'] = body;
        return this;
    }
}
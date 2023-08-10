import { CreateShareRequestBody } from './CreateShareRequestBody';


export class CreateShareRequest {
    public body?: CreateShareRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateShareRequestBody): CreateShareRequest {
        this['body'] = body;
        return this;
    }
}
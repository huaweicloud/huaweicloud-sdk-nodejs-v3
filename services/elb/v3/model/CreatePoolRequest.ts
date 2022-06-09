import { CreatePoolRequestBody } from './CreatePoolRequestBody';


export class CreatePoolRequest {
    public body?: CreatePoolRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePoolRequestBody): CreatePoolRequest {
        this['body'] = body;
        return this;
    }
}
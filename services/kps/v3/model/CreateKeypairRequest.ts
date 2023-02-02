import { CreateKeypairRequestBody } from './CreateKeypairRequestBody';


export class CreateKeypairRequest {
    public body?: CreateKeypairRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateKeypairRequestBody): CreateKeypairRequest {
        this['body'] = body;
        return this;
    }
}
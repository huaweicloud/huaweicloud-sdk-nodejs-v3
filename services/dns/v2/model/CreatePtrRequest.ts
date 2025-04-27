import { CreatePtrRequestBody } from './CreatePtrRequestBody';


export class CreatePtrRequest {
    public body?: CreatePtrRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePtrRequestBody): CreatePtrRequest {
        this['body'] = body;
        return this;
    }
}
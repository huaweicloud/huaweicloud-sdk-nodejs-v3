import { CreatePinRequestBody } from './CreatePinRequestBody';


export class CreatePinRequest {
    public body?: CreatePinRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePinRequestBody): CreatePinRequest {
        this['body'] = body;
        return this;
    }
}
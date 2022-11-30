import { CreateListenerRequestBody } from './CreateListenerRequestBody';


export class CreateListenerRequest {
    public body?: CreateListenerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateListenerRequestBody): CreateListenerRequest {
        this['body'] = body;
        return this;
    }
}
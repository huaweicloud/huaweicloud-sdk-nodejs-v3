import { AddRequestBody } from './AddRequestBody';


export class AddRequest {
    public body?: AddRequestBody;
    public constructor() { 
    }
    public withBody(body: AddRequestBody): AddRequest {
        this['body'] = body;
        return this;
    }
}
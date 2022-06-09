import { CreateHealthmonitorRequestBody } from './CreateHealthmonitorRequestBody';


export class CreateHealthmonitorRequest {
    public body?: CreateHealthmonitorRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateHealthmonitorRequestBody): CreateHealthmonitorRequest {
        this['body'] = body;
        return this;
    }
}
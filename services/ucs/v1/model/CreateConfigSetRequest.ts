import { CreateConfigSetRequestBody } from './CreateConfigSetRequestBody';


export class CreateConfigSetRequest {
    public body?: CreateConfigSetRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateConfigSetRequestBody): CreateConfigSetRequest {
        this['body'] = body;
        return this;
    }
}
import { CreateServersRequestBody } from './CreateServersRequestBody';


export class CreateServersRequest {
    public body?: CreateServersRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateServersRequestBody): CreateServersRequest {
        this['body'] = body;
        return this;
    }
}
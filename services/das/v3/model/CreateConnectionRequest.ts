import { CreateConnectionRequestBody } from './CreateConnectionRequestBody';


export class CreateConnectionRequest {
    public body?: CreateConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateConnectionRequestBody): CreateConnectionRequest {
        this['body'] = body;
        return this;
    }
}
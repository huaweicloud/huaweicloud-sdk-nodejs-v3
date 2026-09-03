import { CreateDbsConnectionRequestBody } from './CreateDbsConnectionRequestBody';


export class CreateDbsConnectionRequest {
    public body?: CreateDbsConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDbsConnectionRequestBody): CreateDbsConnectionRequest {
        this['body'] = body;
        return this;
    }
}
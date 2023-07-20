import { CreateDatabaseRequestBody } from './CreateDatabaseRequestBody';


export class CreateDatabaseRequest {
    public body?: CreateDatabaseRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDatabaseRequestBody): CreateDatabaseRequest {
        this['body'] = body;
        return this;
    }
}
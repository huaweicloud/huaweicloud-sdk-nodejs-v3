import { CreateSqlJobRequestBody } from './CreateSqlJobRequestBody';


export class CreateSqlJobRequest {
    public body?: CreateSqlJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSqlJobRequestBody): CreateSqlJobRequest {
        this['body'] = body;
        return this;
    }
}
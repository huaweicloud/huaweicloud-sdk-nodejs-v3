import { CreateDatakeyRequestBody } from './CreateDatakeyRequestBody';


export class CreateDatakeyRequest {
    public body?: CreateDatakeyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDatakeyRequestBody): CreateDatakeyRequest {
        this['body'] = body;
        return this;
    }
}
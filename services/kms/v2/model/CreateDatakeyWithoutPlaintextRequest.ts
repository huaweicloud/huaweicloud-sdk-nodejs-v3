import { CreateDatakeyRequestBody } from './CreateDatakeyRequestBody';


export class CreateDatakeyWithoutPlaintextRequest {
    public body?: CreateDatakeyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDatakeyRequestBody): CreateDatakeyWithoutPlaintextRequest {
        this['body'] = body;
        return this;
    }
}
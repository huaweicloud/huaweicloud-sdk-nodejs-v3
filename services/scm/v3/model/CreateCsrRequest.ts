import { CreateCsrRequestBody } from './CreateCsrRequestBody';


export class CreateCsrRequest {
    public body?: CreateCsrRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCsrRequestBody): CreateCsrRequest {
        this['body'] = body;
        return this;
    }
}
import { ExecuteTestConnectionNewRequestBody } from './ExecuteTestConnectionNewRequestBody';


export class ExecuteTestConnectionNewRequest {
    public body?: ExecuteTestConnectionNewRequestBody;
    public constructor() { 
    }
    public withBody(body: ExecuteTestConnectionNewRequestBody): ExecuteTestConnectionNewRequest {
        this['body'] = body;
        return this;
    }
}
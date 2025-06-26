import { CreateManagedAccountRequest } from './CreateManagedAccountRequest';


export class CreateAccountRequest {
    public body?: CreateManagedAccountRequest;
    public constructor() { 
    }
    public withBody(body: CreateManagedAccountRequest): CreateAccountRequest {
        this['body'] = body;
        return this;
    }
}
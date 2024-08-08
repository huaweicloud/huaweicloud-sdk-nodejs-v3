import { CreateInstance } from './CreateInstance';


export class CreateInstanceRequest {
    public body?: CreateInstance;
    public constructor() { 
    }
    public withBody(body: CreateInstance): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}
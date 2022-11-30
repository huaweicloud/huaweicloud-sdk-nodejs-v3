import { CreateDependencyRequestBody } from './CreateDependencyRequestBody';


export class CreateDependencyRequest {
    public body?: CreateDependencyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDependencyRequestBody): CreateDependencyRequest {
        this['body'] = body;
        return this;
    }
}
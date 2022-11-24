import { CreateDependencyRequestBody } from './CreateDependencyRequestBody';


export class CreateDependencyVersionRequest {
    public body?: CreateDependencyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDependencyRequestBody): CreateDependencyVersionRequest {
        this['body'] = body;
        return this;
    }
}
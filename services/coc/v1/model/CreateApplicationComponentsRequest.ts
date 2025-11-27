import { ComponentCreateRequest } from './ComponentCreateRequest';


export class CreateApplicationComponentsRequest {
    public body?: ComponentCreateRequest;
    public constructor() { 
    }
    public withBody(body: ComponentCreateRequest): CreateApplicationComponentsRequest {
        this['body'] = body;
        return this;
    }
}
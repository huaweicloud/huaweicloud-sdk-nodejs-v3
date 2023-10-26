import { ComponentParam } from './ComponentParam';


export class CreateComponentRequest {
    public body?: ComponentParam;
    public constructor() { 
    }
    public withBody(body: ComponentParam): CreateComponentRequest {
        this['body'] = body;
        return this;
    }
}
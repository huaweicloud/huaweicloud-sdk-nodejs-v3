import { EnvironmentCreate } from './EnvironmentCreate';


export class CreateEnvironmentRequest {
    public body?: EnvironmentCreate;
    public constructor() { 
    }
    public withBody(body: EnvironmentCreate): CreateEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}
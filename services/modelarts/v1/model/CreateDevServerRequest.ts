import { ServerCreateRequest } from './ServerCreateRequest';


export class CreateDevServerRequest {
    public body?: ServerCreateRequest;
    public constructor() { 
    }
    public withBody(body: ServerCreateRequest): CreateDevServerRequest {
        this['body'] = body;
        return this;
    }
}
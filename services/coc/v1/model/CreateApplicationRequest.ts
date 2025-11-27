import { ApplicationCreateRequest } from './ApplicationCreateRequest';


export class CreateApplicationRequest {
    public body?: ApplicationCreateRequest;
    public constructor() { 
    }
    public withBody(body: ApplicationCreateRequest): CreateApplicationRequest {
        this['body'] = body;
        return this;
    }
}
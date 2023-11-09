import { ApplicationCreate } from './ApplicationCreate';


export class CreateApplicationRequest {
    public body?: ApplicationCreate;
    public constructor() { 
    }
    public withBody(body: ApplicationCreate): CreateApplicationRequest {
        this['body'] = body;
        return this;
    }
}
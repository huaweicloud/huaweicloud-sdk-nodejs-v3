import { Agency } from './Agency';


export class CreateAgencyRequest {
    public body?: Agency;
    public constructor() { 
    }
    public withBody(body: Agency): CreateAgencyRequest {
        this['body'] = body;
        return this;
    }
}
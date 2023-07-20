import { CreateAgencyRequest } from './CreateAgencyRequest';


export class CreateDliAgencyRequest {
    public body?: CreateAgencyRequest;
    public constructor() { 
    }
    public withBody(body: CreateAgencyRequest): CreateDliAgencyRequest {
        this['body'] = body;
        return this;
    }
}
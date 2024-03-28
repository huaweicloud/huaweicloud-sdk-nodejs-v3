import { CreateDliAgencyRequestBody } from './CreateDliAgencyRequestBody';


export class CreateDliAgencyRequest {
    public body?: CreateDliAgencyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDliAgencyRequestBody): CreateDliAgencyRequest {
        this['body'] = body;
        return this;
    }
}
import { CreateAgenciesReq } from './CreateAgenciesReq';


export class CreateAgenciesRequest {
    public body?: CreateAgenciesReq;
    public constructor() { 
    }
    public withBody(body: CreateAgenciesReq): CreateAgenciesRequest {
        this['body'] = body;
        return this;
    }
}
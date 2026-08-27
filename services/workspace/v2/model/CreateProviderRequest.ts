import { CreateProviderReq } from './CreateProviderReq';


export class CreateProviderRequest {
    public body?: CreateProviderReq;
    public constructor() { 
    }
    public withBody(body: CreateProviderReq): CreateProviderRequest {
        this['body'] = body;
        return this;
    }
}
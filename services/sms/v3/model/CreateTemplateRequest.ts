import { CreateTemplateReq } from './CreateTemplateReq';


export class CreateTemplateRequest {
    public body?: CreateTemplateReq;
    public constructor() { 
    }
    public withBody(body: CreateTemplateReq): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}
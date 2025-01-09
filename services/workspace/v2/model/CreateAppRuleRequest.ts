import { CreateAppRuleReq } from './CreateAppRuleReq';


export class CreateAppRuleRequest {
    public body?: CreateAppRuleReq;
    public constructor() { 
    }
    public withBody(body: CreateAppRuleReq): CreateAppRuleRequest {
        this['body'] = body;
        return this;
    }
}
import { CreateSecurityGroupRuleRequestBody } from './CreateSecurityGroupRuleRequestBody';


export class CreateSecurityGroupRuleRequest {
    public body?: CreateSecurityGroupRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSecurityGroupRuleRequestBody): CreateSecurityGroupRuleRequest {
        this['body'] = body;
        return this;
    }
}
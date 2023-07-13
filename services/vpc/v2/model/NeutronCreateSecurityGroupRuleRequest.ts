import { NeutronCreateSecurityGroupRuleRequestBody } from './NeutronCreateSecurityGroupRuleRequestBody';


export class NeutronCreateSecurityGroupRuleRequest {
    public body?: NeutronCreateSecurityGroupRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateSecurityGroupRuleRequestBody): NeutronCreateSecurityGroupRuleRequest {
        this['body'] = body;
        return this;
    }
}
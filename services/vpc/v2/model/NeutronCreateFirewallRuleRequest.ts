import { NeutronCreateFirewallRuleRequestBody } from './NeutronCreateFirewallRuleRequestBody';


export class NeutronCreateFirewallRuleRequest {
    public body?: NeutronCreateFirewallRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateFirewallRuleRequestBody): NeutronCreateFirewallRuleRequest {
        this['body'] = body;
        return this;
    }
}
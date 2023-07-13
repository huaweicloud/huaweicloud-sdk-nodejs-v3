import { NeutronCreateFirewallGroupRequestBody } from './NeutronCreateFirewallGroupRequestBody';


export class NeutronCreateFirewallGroupRequest {
    public body?: NeutronCreateFirewallGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateFirewallGroupRequestBody): NeutronCreateFirewallGroupRequest {
        this['body'] = body;
        return this;
    }
}
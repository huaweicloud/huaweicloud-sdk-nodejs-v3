import { NeutronCreateFirewallPolicyRequestBody } from './NeutronCreateFirewallPolicyRequestBody';


export class NeutronCreateFirewallPolicyRequest {
    public body?: NeutronCreateFirewallPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateFirewallPolicyRequestBody): NeutronCreateFirewallPolicyRequest {
        this['body'] = body;
        return this;
    }
}
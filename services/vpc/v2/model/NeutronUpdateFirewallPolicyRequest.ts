import { NeutronUpdateFirewallPolicyRequestBody } from './NeutronUpdateFirewallPolicyRequestBody';


export class NeutronUpdateFirewallPolicyRequest {
    private 'firewall_policy_id': string | undefined;
    public body?: NeutronUpdateFirewallPolicyRequestBody;
    public constructor(firewallPolicyId?: any) { 
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public withFirewallPolicyId(firewallPolicyId: string): NeutronUpdateFirewallPolicyRequest {
        this['firewall_policy_id'] = firewallPolicyId;
        return this;
    }
    public set firewallPolicyId(firewallPolicyId: string | undefined) {
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public get firewallPolicyId() {
        return this['firewall_policy_id'];
    }
    public withBody(body: NeutronUpdateFirewallPolicyRequestBody): NeutronUpdateFirewallPolicyRequest {
        this['body'] = body;
        return this;
    }
}
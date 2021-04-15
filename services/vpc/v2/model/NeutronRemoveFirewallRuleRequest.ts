import { NeutronRemoveFirewallRuleRequestBody } from './NeutronRemoveFirewallRuleRequestBody';


export class NeutronRemoveFirewallRuleRequest {
    private 'firewall_policy_id': string | undefined;
    public body?: NeutronRemoveFirewallRuleRequestBody;
    public constructor(firewallPolicyId?: any) { 
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public withFirewallPolicyId(firewallPolicyId: string): NeutronRemoveFirewallRuleRequest {
        this['firewall_policy_id'] = firewallPolicyId;
        return this;
    }
    public set firewallPolicyId(firewallPolicyId: string | undefined) {
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public get firewallPolicyId() {
        return this['firewall_policy_id'];
    }
    public withBody(body: NeutronRemoveFirewallRuleRequestBody): NeutronRemoveFirewallRuleRequest {
        this['body'] = body;
        return this;
    }
}
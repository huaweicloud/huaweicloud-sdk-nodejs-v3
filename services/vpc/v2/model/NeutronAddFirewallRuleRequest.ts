import { NeutronInsertFirewallRuleRequestBody } from './NeutronInsertFirewallRuleRequestBody';


export class NeutronAddFirewallRuleRequest {
    private 'firewall_policy_id': string | undefined;
    public body?: NeutronInsertFirewallRuleRequestBody;
    public constructor(firewallPolicyId?: any) { 
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public withFirewallPolicyId(firewallPolicyId: string): NeutronAddFirewallRuleRequest {
        this['firewall_policy_id'] = firewallPolicyId;
        return this;
    }
    public set firewallPolicyId(firewallPolicyId: string | undefined) {
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public get firewallPolicyId() {
        return this['firewall_policy_id'];
    }
    public withBody(body: NeutronInsertFirewallRuleRequestBody): NeutronAddFirewallRuleRequest {
        this['body'] = body;
        return this;
    }
}
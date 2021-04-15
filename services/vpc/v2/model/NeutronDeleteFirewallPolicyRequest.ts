

export class NeutronDeleteFirewallPolicyRequest {
    private 'firewall_policy_id': string | undefined;
    public constructor(firewallPolicyId?: any) { 
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public withFirewallPolicyId(firewallPolicyId: string): NeutronDeleteFirewallPolicyRequest {
        this['firewall_policy_id'] = firewallPolicyId;
        return this;
    }
    public set firewallPolicyId(firewallPolicyId: string | undefined) {
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public get firewallPolicyId() {
        return this['firewall_policy_id'];
    }
}
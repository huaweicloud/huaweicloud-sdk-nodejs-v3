

export class NeutronDeleteFirewallPolicyRequest {
    private 'firewall_policy_id'?: string;
    public constructor(firewallPolicyId?: string) { 
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public withFirewallPolicyId(firewallPolicyId: string): NeutronDeleteFirewallPolicyRequest {
        this['firewall_policy_id'] = firewallPolicyId;
        return this;
    }
    public set firewallPolicyId(firewallPolicyId: string  | undefined) {
        this['firewall_policy_id'] = firewallPolicyId;
    }
    public get firewallPolicyId(): string | undefined {
        return this['firewall_policy_id'];
    }
}
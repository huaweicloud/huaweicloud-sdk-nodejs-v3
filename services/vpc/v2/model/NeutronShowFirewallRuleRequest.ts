

export class NeutronShowFirewallRuleRequest {
    private 'firewall_rule_id'?: string;
    public constructor(firewallRuleId?: string) { 
        this['firewall_rule_id'] = firewallRuleId;
    }
    public withFirewallRuleId(firewallRuleId: string): NeutronShowFirewallRuleRequest {
        this['firewall_rule_id'] = firewallRuleId;
        return this;
    }
    public set firewallRuleId(firewallRuleId: string  | undefined) {
        this['firewall_rule_id'] = firewallRuleId;
    }
    public get firewallRuleId(): string | undefined {
        return this['firewall_rule_id'];
    }
}
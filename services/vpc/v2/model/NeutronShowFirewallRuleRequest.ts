

export class NeutronShowFirewallRuleRequest {
    private 'firewall_rule_id': string | undefined;
    public constructor(firewallRuleId?: any) { 
        this['firewall_rule_id'] = firewallRuleId;
    }
    public withFirewallRuleId(firewallRuleId: string): NeutronShowFirewallRuleRequest {
        this['firewall_rule_id'] = firewallRuleId;
        return this;
    }
    public set firewallRuleId(firewallRuleId: string | undefined) {
        this['firewall_rule_id'] = firewallRuleId;
    }
    public get firewallRuleId() {
        return this['firewall_rule_id'];
    }
}
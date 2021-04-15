

export class NeutronInsertFirewallRuleRequestBody {
    private 'firewall_rule_id': string | undefined;
    private 'insert_after'?: string | undefined;
    private 'insert_before'?: string | undefined;
    public constructor(firewallRuleId?: any) { 
        this['firewall_rule_id'] = firewallRuleId;
    }
    public withFirewallRuleId(firewallRuleId: string): NeutronInsertFirewallRuleRequestBody {
        this['firewall_rule_id'] = firewallRuleId;
        return this;
    }
    public set firewallRuleId(firewallRuleId: string | undefined) {
        this['firewall_rule_id'] = firewallRuleId;
    }
    public get firewallRuleId() {
        return this['firewall_rule_id'];
    }
    public withInsertAfter(insertAfter: string): NeutronInsertFirewallRuleRequestBody {
        this['insert_after'] = insertAfter;
        return this;
    }
    public set insertAfter(insertAfter: string | undefined) {
        this['insert_after'] = insertAfter;
    }
    public get insertAfter() {
        return this['insert_after'];
    }
    public withInsertBefore(insertBefore: string): NeutronInsertFirewallRuleRequestBody {
        this['insert_before'] = insertBefore;
        return this;
    }
    public set insertBefore(insertBefore: string | undefined) {
        this['insert_before'] = insertBefore;
    }
    public get insertBefore() {
        return this['insert_before'];
    }
}
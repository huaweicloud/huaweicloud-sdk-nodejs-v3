

export class NeutronInsertFirewallRuleRequestBody {
    private 'firewall_rule_id'?: string;
    private 'insert_after'?: string;
    private 'insert_before'?: string;
    public constructor(firewallRuleId?: string) { 
        this['firewall_rule_id'] = firewallRuleId;
    }
    public withFirewallRuleId(firewallRuleId: string): NeutronInsertFirewallRuleRequestBody {
        this['firewall_rule_id'] = firewallRuleId;
        return this;
    }
    public set firewallRuleId(firewallRuleId: string  | undefined) {
        this['firewall_rule_id'] = firewallRuleId;
    }
    public get firewallRuleId(): string | undefined {
        return this['firewall_rule_id'];
    }
    public withInsertAfter(insertAfter: string): NeutronInsertFirewallRuleRequestBody {
        this['insert_after'] = insertAfter;
        return this;
    }
    public set insertAfter(insertAfter: string  | undefined) {
        this['insert_after'] = insertAfter;
    }
    public get insertAfter(): string | undefined {
        return this['insert_after'];
    }
    public withInsertBefore(insertBefore: string): NeutronInsertFirewallRuleRequestBody {
        this['insert_before'] = insertBefore;
        return this;
    }
    public set insertBefore(insertBefore: string  | undefined) {
        this['insert_before'] = insertBefore;
    }
    public get insertBefore(): string | undefined {
        return this['insert_before'];
    }
}
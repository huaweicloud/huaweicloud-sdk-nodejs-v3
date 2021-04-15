

export class ShowSecurityGroupRuleRequest {
    private 'security_group_rule_id': string | undefined;
    public constructor(securityGroupRuleId?: any) { 
        this['security_group_rule_id'] = securityGroupRuleId;
    }
    public withSecurityGroupRuleId(securityGroupRuleId: string): ShowSecurityGroupRuleRequest {
        this['security_group_rule_id'] = securityGroupRuleId;
        return this;
    }
    public set securityGroupRuleId(securityGroupRuleId: string | undefined) {
        this['security_group_rule_id'] = securityGroupRuleId;
    }
    public get securityGroupRuleId() {
        return this['security_group_rule_id'];
    }
}
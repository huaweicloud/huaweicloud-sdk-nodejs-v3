

export class DeleteSecurityGroupRuleRequest {
    private 'security_group_rule_id'?: string;
    public constructor(securityGroupRuleId?: string) { 
        this['security_group_rule_id'] = securityGroupRuleId;
    }
    public withSecurityGroupRuleId(securityGroupRuleId: string): DeleteSecurityGroupRuleRequest {
        this['security_group_rule_id'] = securityGroupRuleId;
        return this;
    }
    public set securityGroupRuleId(securityGroupRuleId: string  | undefined) {
        this['security_group_rule_id'] = securityGroupRuleId;
    }
    public get securityGroupRuleId(): string | undefined {
        return this['security_group_rule_id'];
    }
}
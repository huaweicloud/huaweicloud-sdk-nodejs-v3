import { CreateSecurityGroupRuleOption } from './CreateSecurityGroupRuleOption';


export class CreateSecurityGroupRuleRequestBody {
    private 'security_group_rule': CreateSecurityGroupRuleOption | undefined;
    public constructor(securityGroupRule?: any) { 
        this['security_group_rule'] = securityGroupRule;
    }
    public withSecurityGroupRule(securityGroupRule: CreateSecurityGroupRuleOption): CreateSecurityGroupRuleRequestBody {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: CreateSecurityGroupRuleOption | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule() {
        return this['security_group_rule'];
    }
}
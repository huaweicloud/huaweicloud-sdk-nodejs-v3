import { NeutronCreateSecurityGroupRuleOption } from './NeutronCreateSecurityGroupRuleOption';


export class NeutronCreateSecurityGroupRuleRequestBody {
    private 'security_group_rule': NeutronCreateSecurityGroupRuleOption | undefined;
    public constructor(securityGroupRule?: any) { 
        this['security_group_rule'] = securityGroupRule;
    }
    public withSecurityGroupRule(securityGroupRule: NeutronCreateSecurityGroupRuleOption): NeutronCreateSecurityGroupRuleRequestBody {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: NeutronCreateSecurityGroupRuleOption | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule() {
        return this['security_group_rule'];
    }
}
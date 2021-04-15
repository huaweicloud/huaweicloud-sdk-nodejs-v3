import { CreateSecurityGroupRuleOption } from './CreateSecurityGroupRuleOption';


export class CreateSecurityGroupRuleRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'security_group_rule': CreateSecurityGroupRuleOption | undefined;
    public constructor(securityGroupRule?: any) { 
        this['security_group_rule'] = securityGroupRule;
    }
    public withDryRun(dryRun: boolean): CreateSecurityGroupRuleRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
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
import { BatchCreateSecurityGroupRulesOption } from './BatchCreateSecurityGroupRulesOption';


export class BatchCreateSecurityGroupRulesRequestBody {
    private 'security_group_rules'?: Array<BatchCreateSecurityGroupRulesOption>;
    private 'ignore_duplicate'?: boolean;
    private 'dry_run'?: boolean;
    public constructor(securityGroupRules?: Array<BatchCreateSecurityGroupRulesOption>) { 
        this['security_group_rules'] = securityGroupRules;
    }
    public withSecurityGroupRules(securityGroupRules: Array<BatchCreateSecurityGroupRulesOption>): BatchCreateSecurityGroupRulesRequestBody {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<BatchCreateSecurityGroupRulesOption>  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): Array<BatchCreateSecurityGroupRulesOption> | undefined {
        return this['security_group_rules'];
    }
    public withIgnoreDuplicate(ignoreDuplicate: boolean): BatchCreateSecurityGroupRulesRequestBody {
        this['ignore_duplicate'] = ignoreDuplicate;
        return this;
    }
    public set ignoreDuplicate(ignoreDuplicate: boolean  | undefined) {
        this['ignore_duplicate'] = ignoreDuplicate;
    }
    public get ignoreDuplicate(): boolean | undefined {
        return this['ignore_duplicate'];
    }
    public withDryRun(dryRun: boolean): BatchCreateSecurityGroupRulesRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}
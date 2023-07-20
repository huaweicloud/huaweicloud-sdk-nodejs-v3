import { UpdateSecurityGroupOption } from './UpdateSecurityGroupOption';


export class UpdateSecurityGroupRequestBody {
    private 'dry_run'?: boolean;
    private 'security_group'?: UpdateSecurityGroupOption;
    public constructor(securityGroup?: UpdateSecurityGroupOption) { 
        this['security_group'] = securityGroup;
    }
    public withDryRun(dryRun: boolean): UpdateSecurityGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withSecurityGroup(securityGroup: UpdateSecurityGroupOption): UpdateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: UpdateSecurityGroupOption  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): UpdateSecurityGroupOption | undefined {
        return this['security_group'];
    }
}
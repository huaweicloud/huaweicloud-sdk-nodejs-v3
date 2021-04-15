import { UpdateSecurityGroupOption } from './UpdateSecurityGroupOption';


export class UpdateSecurityGroupRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'security_group': UpdateSecurityGroupOption | undefined;
    public constructor(securityGroup?: any) { 
        this['security_group'] = securityGroup;
    }
    public withDryRun(dryRun: boolean): UpdateSecurityGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withSecurityGroup(securityGroup: UpdateSecurityGroupOption): UpdateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: UpdateSecurityGroupOption | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}
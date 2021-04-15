import { CreateSecurityGroupOption } from './CreateSecurityGroupOption';


export class CreateSecurityGroupRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'security_group': CreateSecurityGroupOption | undefined;
    public constructor(securityGroup?: any) { 
        this['security_group'] = securityGroup;
    }
    public withDryRun(dryRun: boolean): CreateSecurityGroupRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withSecurityGroup(securityGroup: CreateSecurityGroupOption): CreateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: CreateSecurityGroupOption | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}
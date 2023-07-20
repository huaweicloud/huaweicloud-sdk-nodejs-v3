import { CreateSecurityGroupOption } from './CreateSecurityGroupOption';


export class CreateSecurityGroupRequestBody {
    private 'security_group'?: CreateSecurityGroupOption;
    public constructor(securityGroup?: CreateSecurityGroupOption) { 
        this['security_group'] = securityGroup;
    }
    public withSecurityGroup(securityGroup: CreateSecurityGroupOption): CreateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: CreateSecurityGroupOption  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): CreateSecurityGroupOption | undefined {
        return this['security_group'];
    }
}
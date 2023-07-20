import { NeutronUpdateSecurityGroupOption } from './NeutronUpdateSecurityGroupOption';


export class NeutronUpdateSecurityGroupRequestBody {
    private 'security_group'?: NeutronUpdateSecurityGroupOption;
    public constructor(securityGroup?: NeutronUpdateSecurityGroupOption) { 
        this['security_group'] = securityGroup;
    }
    public withSecurityGroup(securityGroup: NeutronUpdateSecurityGroupOption): NeutronUpdateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronUpdateSecurityGroupOption  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): NeutronUpdateSecurityGroupOption | undefined {
        return this['security_group'];
    }
}
import { NeutronUpdateSecurityGroupOption } from './NeutronUpdateSecurityGroupOption';


export class NeutronUpdateSecurityGroupRequestBody {
    private 'security_group': NeutronUpdateSecurityGroupOption | undefined;
    public constructor(securityGroup?: any) { 
        this['security_group'] = securityGroup;
    }
    public withSecurityGroup(securityGroup: NeutronUpdateSecurityGroupOption): NeutronUpdateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronUpdateSecurityGroupOption | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}
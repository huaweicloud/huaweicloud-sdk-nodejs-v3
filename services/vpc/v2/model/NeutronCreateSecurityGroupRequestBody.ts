import { NeutronCreateSecurityGroupOption } from './NeutronCreateSecurityGroupOption';


export class NeutronCreateSecurityGroupRequestBody {
    private 'security_group': NeutronCreateSecurityGroupOption | undefined;
    public constructor(securityGroup?: any) { 
        this['security_group'] = securityGroup;
    }
    public withSecurityGroup(securityGroup: NeutronCreateSecurityGroupOption): NeutronCreateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronCreateSecurityGroupOption | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}
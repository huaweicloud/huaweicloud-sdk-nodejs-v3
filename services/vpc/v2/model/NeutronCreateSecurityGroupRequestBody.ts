import { NeutronCreateSecurityGroupOption } from './NeutronCreateSecurityGroupOption';


export class NeutronCreateSecurityGroupRequestBody {
    private 'security_group'?: NeutronCreateSecurityGroupOption;
    public constructor(securityGroup?: NeutronCreateSecurityGroupOption) { 
        this['security_group'] = securityGroup;
    }
    public withSecurityGroup(securityGroup: NeutronCreateSecurityGroupOption): NeutronCreateSecurityGroupRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronCreateSecurityGroupOption  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): NeutronCreateSecurityGroupOption | undefined {
        return this['security_group'];
    }
}
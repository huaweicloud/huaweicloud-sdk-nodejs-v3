

export class NeutronDeleteSecurityGroupRequest {
    private 'security_group_id': string | undefined;
    public constructor(securityGroupId?: any) { 
        this['security_group_id'] = securityGroupId;
    }
    public withSecurityGroupId(securityGroupId: string): NeutronDeleteSecurityGroupRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
}
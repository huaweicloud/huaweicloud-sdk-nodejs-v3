

export class Nics {
    private 'net_id': string | undefined;
    private 'security_group_id': string | undefined;
    public constructor(netId?: any, securityGroupId?: any) { 
        this['net_id'] = netId;
        this['security_group_id'] = securityGroupId;
    }
    public withNetId(netId: string): Nics {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string | undefined) {
        this['net_id'] = netId;
    }
    public get netId() {
        return this['net_id'];
    }
    public withSecurityGroupId(securityGroupId: string): Nics {
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
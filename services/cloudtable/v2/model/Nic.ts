

export class Nic {
    private 'net_id'?: string;
    private 'security_group_id'?: string;
    public constructor(netId?: string, securityGroupId?: string) { 
        this['net_id'] = netId;
        this['security_group_id'] = securityGroupId;
    }
    public withNetId(netId: string): Nic {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withSecurityGroupId(securityGroupId: string): Nic {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
}
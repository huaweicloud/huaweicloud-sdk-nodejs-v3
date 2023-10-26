

export class Nics {
    public securityGroupId?: string;
    private 'net-id'?: string;
    public constructor(securityGroupId?: string, netId?: string) { 
        this['securityGroupId'] = securityGroupId;
        this['net-id'] = netId;
    }
    public withSecurityGroupId(securityGroupId: string): Nics {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withNetId(netId: string): Nics {
        this['net-id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net-id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net-id'];
    }
}
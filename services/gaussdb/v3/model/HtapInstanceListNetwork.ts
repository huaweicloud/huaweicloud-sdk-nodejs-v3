

export class HtapInstanceListNetwork {
    private 'vpc_id'?: string;
    private 'sub_net_id'?: string;
    private 'security_group_id'?: string;
    public constructor() { 
    }
    public withVpcId(vpcId: string): HtapInstanceListNetwork {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubNetId(subNetId: string): HtapInstanceListNetwork {
        this['sub_net_id'] = subNetId;
        return this;
    }
    public set subNetId(subNetId: string  | undefined) {
        this['sub_net_id'] = subNetId;
    }
    public get subNetId(): string | undefined {
        return this['sub_net_id'];
    }
    public withSecurityGroupId(securityGroupId: string): HtapInstanceListNetwork {
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


export class CreateEWFirewallInspectVpcResp {
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<string>;
    public constructor() { 
    }
    public withVpcId(vpcId: string): CreateEWFirewallInspectVpcResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): CreateEWFirewallInspectVpcResp {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
}


export class JobNodeVpcInfo {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'custom_node_ip'?: string;
    private 'security_group_id'?: string;
    public constructor(vpcId?: string, subnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withVpcId(vpcId: string): JobNodeVpcInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): JobNodeVpcInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withCustomNodeIp(customNodeIp: string): JobNodeVpcInfo {
        this['custom_node_ip'] = customNodeIp;
        return this;
    }
    public set customNodeIp(customNodeIp: string  | undefined) {
        this['custom_node_ip'] = customNodeIp;
    }
    public get customNodeIp(): string | undefined {
        return this['custom_node_ip'];
    }
    public withSecurityGroupId(securityGroupId: string): JobNodeVpcInfo {
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
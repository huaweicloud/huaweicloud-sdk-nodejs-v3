

export class JobNodeVpcInfo {
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'custom_node_ip'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    public constructor(vpcId?: any, subnetId?: any) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withVpcId(vpcId: string): JobNodeVpcInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): JobNodeVpcInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withCustomNodeIp(customNodeIp: string): JobNodeVpcInfo {
        this['custom_node_ip'] = customNodeIp;
        return this;
    }
    public set customNodeIp(customNodeIp: string | undefined) {
        this['custom_node_ip'] = customNodeIp;
    }
    public get customNodeIp() {
        return this['custom_node_ip'];
    }
    public withSecurityGroupId(securityGroupId: string): JobNodeVpcInfo {
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
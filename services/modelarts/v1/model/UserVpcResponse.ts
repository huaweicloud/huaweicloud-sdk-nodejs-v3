

export class UserVpcResponse {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_ids'?: Array<string>;
    private 'connect_cidrs'?: string;
    private 'port_id'?: Array<string>;
    private 'port_ip'?: string;
    public constructor() { 
    }
    public withVpcId(vpcId: string): UserVpcResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UserVpcResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): UserVpcResponse {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withConnectCidrs(connectCidrs: string): UserVpcResponse {
        this['connect_cidrs'] = connectCidrs;
        return this;
    }
    public set connectCidrs(connectCidrs: string  | undefined) {
        this['connect_cidrs'] = connectCidrs;
    }
    public get connectCidrs(): string | undefined {
        return this['connect_cidrs'];
    }
    public withPortId(portId: Array<string>): UserVpcResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: Array<string>  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): Array<string> | undefined {
        return this['port_id'];
    }
    public withPortIp(portIp: string): UserVpcResponse {
        this['port_ip'] = portIp;
        return this;
    }
    public set portIp(portIp: string  | undefined) {
        this['port_ip'] = portIp;
    }
    public get portIp(): string | undefined {
        return this['port_ip'];
    }
}
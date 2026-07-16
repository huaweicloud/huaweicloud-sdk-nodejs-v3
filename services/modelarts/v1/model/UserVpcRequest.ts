

export class UserVpcRequest {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_ids'?: Array<string>;
    private 'connect_cidrs'?: Array<string>;
    public constructor(vpcId?: string, subnetId?: string, securityGroupIds?: Array<string>) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_ids'] = securityGroupIds;
    }
    public withVpcId(vpcId: string): UserVpcRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UserVpcRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): UserVpcRequest {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withConnectCidrs(connectCidrs: Array<string>): UserVpcRequest {
        this['connect_cidrs'] = connectCidrs;
        return this;
    }
    public set connectCidrs(connectCidrs: Array<string>  | undefined) {
        this['connect_cidrs'] = connectCidrs;
    }
    public get connectCidrs(): Array<string> | undefined {
        return this['connect_cidrs'];
    }
}
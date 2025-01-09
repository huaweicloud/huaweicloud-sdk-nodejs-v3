

export class ChangeDesktopNetworkReq {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'private_ip'?: string;
    private 'security_group_ids'?: Array<string>;
    public constructor(vpcId?: string, subnetId?: string, securityGroupIds?: Array<string>) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_ids'] = securityGroupIds;
    }
    public withVpcId(vpcId: string): ChangeDesktopNetworkReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ChangeDesktopNetworkReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPrivateIp(privateIp: string): ChangeDesktopNetworkReq {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): ChangeDesktopNetworkReq {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
}
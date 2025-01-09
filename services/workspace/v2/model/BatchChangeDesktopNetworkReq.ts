

export class BatchChangeDesktopNetworkReq {
    private 'desktop_ids'?: Array<string>;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_ids'?: Array<string>;
    public constructor(desktopIds?: Array<string>, vpcId?: string, subnetId?: string) { 
        this['desktop_ids'] = desktopIds;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withDesktopIds(desktopIds: Array<string>): BatchChangeDesktopNetworkReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withVpcId(vpcId: string): BatchChangeDesktopNetworkReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): BatchChangeDesktopNetworkReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): BatchChangeDesktopNetworkReq {
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
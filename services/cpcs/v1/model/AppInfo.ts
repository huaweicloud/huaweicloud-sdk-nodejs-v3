

export class AppInfo {
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'domain_id'?: string;
    public description?: string;
    private 'create_time'?: number;
    public constructor(appId?: string, appName?: string, vpcId?: string, vpcName?: string, subnetId?: string, subnetName?: string, domainId?: string, description?: string, createTime?: number) { 
        this['app_id'] = appId;
        this['app_name'] = appName;
        this['vpc_id'] = vpcId;
        this['vpc_name'] = vpcName;
        this['subnet_id'] = subnetId;
        this['subnet_name'] = subnetName;
        this['domain_id'] = domainId;
        this['description'] = description;
        this['create_time'] = createTime;
    }
    public withAppId(appId: string): AppInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): AppInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVpcId(vpcId: string): AppInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): AppInfo {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): AppInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): AppInfo {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withDomainId(domainId: string): AppInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDescription(description: string): AppInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): AppInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}
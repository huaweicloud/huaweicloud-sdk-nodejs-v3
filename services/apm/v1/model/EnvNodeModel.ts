

export class EnvNodeModel {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    private 'app_id'?: number;
    private 'business_name'?: string;
    private 'inner_domain_id'?: number;
    public name?: string;
    private 'is_default'?: boolean;
    private 'app_name'?: string;
    private 'business_id'?: number;
    public region?: string;
    public constructor() { 
    }
    public withId(id: number): EnvNodeModel {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): EnvNodeModel {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): EnvNodeModel {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withAppId(appId: number): EnvNodeModel {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withBusinessName(businessName: string): EnvNodeModel {
        this['business_name'] = businessName;
        return this;
    }
    public set businessName(businessName: string  | undefined) {
        this['business_name'] = businessName;
    }
    public get businessName(): string | undefined {
        return this['business_name'];
    }
    public withInnerDomainId(innerDomainId: number): EnvNodeModel {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
    public withName(name: string): EnvNodeModel {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): EnvNodeModel {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withAppName(appName: string): EnvNodeModel {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withBusinessId(businessId: number): EnvNodeModel {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withRegion(region: string): EnvNodeModel {
        this['region'] = region;
        return this;
    }
}
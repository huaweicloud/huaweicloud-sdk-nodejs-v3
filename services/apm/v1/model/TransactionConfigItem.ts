

export class TransactionConfigItem {
    public id?: number;
    private 'business_id'?: number;
    private 'env_id'?: number;
    public method?: string;
    private 'env_name'?: string;
    public region?: string;
    public type?: string;
    private 'app_name'?: string;
    public url?: string;
    public constructor() { 
    }
    public withId(id: number): TransactionConfigItem {
        this['id'] = id;
        return this;
    }
    public withBusinessId(businessId: number): TransactionConfigItem {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withEnvId(envId: number): TransactionConfigItem {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withMethod(method: string): TransactionConfigItem {
        this['method'] = method;
        return this;
    }
    public withEnvName(envName: string): TransactionConfigItem {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withRegion(region: string): TransactionConfigItem {
        this['region'] = region;
        return this;
    }
    public withType(type: string): TransactionConfigItem {
        this['type'] = type;
        return this;
    }
    public withAppName(appName: string): TransactionConfigItem {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withUrl(url: string): TransactionConfigItem {
        this['url'] = url;
        return this;
    }
}
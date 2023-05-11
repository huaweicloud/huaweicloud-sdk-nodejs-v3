

export class ResourceIdentifier {
    private 'resource_id': string | undefined;
    private 'resource_name'?: string | undefined;
    public provider: string;
    public type: string;
    private 'source_account_id': string | undefined;
    private 'region_id': string | undefined;
    public constructor(resourceId?: any, provider?: any, type?: any, sourceAccountId?: any, regionId?: any) { 
        this['resource_id'] = resourceId;
        this['provider'] = provider;
        this['type'] = type;
        this['source_account_id'] = sourceAccountId;
        this['region_id'] = regionId;
    }
    public withResourceId(resourceId: string): ResourceIdentifier {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceIdentifier {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withProvider(provider: string): ResourceIdentifier {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ResourceIdentifier {
        this['type'] = type;
        return this;
    }
    public withSourceAccountId(sourceAccountId: string): ResourceIdentifier {
        this['source_account_id'] = sourceAccountId;
        return this;
    }
    public set sourceAccountId(sourceAccountId: string | undefined) {
        this['source_account_id'] = sourceAccountId;
    }
    public get sourceAccountId() {
        return this['source_account_id'];
    }
    public withRegionId(regionId: string): ResourceIdentifier {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
}
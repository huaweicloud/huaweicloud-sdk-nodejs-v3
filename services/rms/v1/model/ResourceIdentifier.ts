

export class ResourceIdentifier {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public provider?: string;
    public type?: string;
    private 'source_account_id'?: string;
    private 'region_id'?: string;
    public constructor(resourceId?: string, provider?: string, type?: string, sourceAccountId?: string, regionId?: string) { 
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
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceIdentifier {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
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
    public set sourceAccountId(sourceAccountId: string  | undefined) {
        this['source_account_id'] = sourceAccountId;
    }
    public get sourceAccountId(): string | undefined {
        return this['source_account_id'];
    }
    public withRegionId(regionId: string): ResourceIdentifier {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}
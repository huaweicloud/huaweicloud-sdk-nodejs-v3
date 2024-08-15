

export class RemediationResourceKey {
    private 'resource_id'?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    public constructor(resourceId?: string, resourceProvider?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_provider'] = resourceProvider;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): RemediationResourceKey {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceProvider(resourceProvider: string): RemediationResourceKey {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): RemediationResourceKey {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}
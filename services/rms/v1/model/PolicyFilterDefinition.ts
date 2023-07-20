

export class PolicyFilterDefinition {
    private 'region_id'?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'tag_key'?: string;
    private 'tag_value'?: string;
    public constructor() { 
    }
    public withRegionId(regionId: string): PolicyFilterDefinition {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceProvider(resourceProvider: string): PolicyFilterDefinition {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): PolicyFilterDefinition {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): PolicyFilterDefinition {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTagKey(tagKey: string): PolicyFilterDefinition {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTagValue(tagValue: string): PolicyFilterDefinition {
        this['tag_value'] = tagValue;
        return this;
    }
    public set tagValue(tagValue: string  | undefined) {
        this['tag_value'] = tagValue;
    }
    public get tagValue(): string | undefined {
        return this['tag_value'];
    }
}


export class SubscriptionUsedInfo {
    private 'resource_id'?: string;
    public owner?: string;
    public description?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): SubscriptionUsedInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withOwner(owner: string): SubscriptionUsedInfo {
        this['owner'] = owner;
        return this;
    }
    public withDescription(description: string): SubscriptionUsedInfo {
        this['description'] = description;
        return this;
    }
}
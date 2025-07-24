

export class SimpleResourceInfo {
    public type?: string;
    public owner?: string;
    private 'resource_id'?: string;
    public constructor() { 
    }
    public withType(type: string): SimpleResourceInfo {
        this['type'] = type;
        return this;
    }
    public withOwner(owner: string): SimpleResourceInfo {
        this['owner'] = owner;
        return this;
    }
    public withResourceId(resourceId: string): SimpleResourceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}
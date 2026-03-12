

export class ResourceDetail {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public constructor(resourceId?: string, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): ResourceDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceDetail {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}
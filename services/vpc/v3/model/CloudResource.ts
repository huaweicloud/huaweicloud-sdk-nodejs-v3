

export class CloudResource {
    private 'resource_type': string | undefined;
    private 'resource_count': number | undefined;
    public constructor(resourceType?: any, resourceCount?: any) { 
        this['resource_type'] = resourceType;
        this['resource_count'] = resourceCount;
    }
    public withResourceType(resourceType: string): CloudResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceCount(resourceCount: number): CloudResource {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount() {
        return this['resource_count'];
    }
}


export class CloudResource {
    private 'resource_type'?: string;
    private 'resource_count'?: number;
    public constructor(resourceType?: string, resourceCount?: number) { 
        this['resource_type'] = resourceType;
        this['resource_count'] = resourceCount;
    }
    public withResourceType(resourceType: string): CloudResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceCount(resourceCount: number): CloudResource {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
}
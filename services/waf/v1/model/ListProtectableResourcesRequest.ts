

export class ListProtectableResourcesRequest {
    private 'vpc_id'?: string;
    public region?: string;
    private 'Content-Type'?: string;
    private 'resource_type'?: string;
    public constructor(contentType?: string, resourceType?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
    }
    public withVpcId(vpcId: string): ListProtectableResourcesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withRegion(region: string): ListProtectableResourcesRequest {
        this['region'] = region;
        return this;
    }
    public withContentType(contentType: string): ListProtectableResourcesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: string): ListProtectableResourcesRequest {
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
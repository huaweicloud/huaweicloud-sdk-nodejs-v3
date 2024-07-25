

export class ShowCustomizeClusterTagsByProjectIdRequest {
    private 'resource_type'?: string;
    private 'Content-Type'?: string;
    public constructor(resourceType?: string, contentType?: string) { 
        this['resource_type'] = resourceType;
        this['Content-Type'] = contentType;
    }
    public withResourceType(resourceType: string): ShowCustomizeClusterTagsByProjectIdRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withContentType(contentType: string): ShowCustomizeClusterTagsByProjectIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}
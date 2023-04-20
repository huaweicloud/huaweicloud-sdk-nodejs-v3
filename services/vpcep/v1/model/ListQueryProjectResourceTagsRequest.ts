

export class ListQueryProjectResourceTagsRequest {
    private 'resource_type': string | undefined;
    private 'Content-Type'?: string | undefined;
    public constructor(resourceType?: any) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListQueryProjectResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withContentType(contentType: string): ListQueryProjectResourceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}


export class ListProjectTagsRequest {
    private 'resource_type': string | undefined;
    public constructor(resourceType?: any) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}


export class ShowTagsRequest {
    private 'resource_id': string | undefined;
    public constructor(resourceId?: any) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ShowTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
}
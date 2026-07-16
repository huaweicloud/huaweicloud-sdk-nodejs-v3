

export class GetTopologiesRequest {
    public id?: string;
    private 'resource_id'?: string;
    public constructor() { 
    }
    public withId(id: string): GetTopologiesRequest {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): GetTopologiesRequest {
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
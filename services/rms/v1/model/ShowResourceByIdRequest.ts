

export class ShowResourceByIdRequest {
    public provider: string;
    public type: string;
    private 'resource_id': string | undefined;
    public constructor(provider?: any, type?: any, resourceId?: any) { 
        this['provider'] = provider;
        this['type'] = type;
        this['resource_id'] = resourceId;
    }
    public withProvider(provider: string): ShowResourceByIdRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ShowResourceByIdRequest {
        this['type'] = type;
        return this;
    }
    public withResourceId(resourceId: string): ShowResourceByIdRequest {
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
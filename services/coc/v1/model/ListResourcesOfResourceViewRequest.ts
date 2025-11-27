

export class ListResourcesOfResourceViewRequest {
    public limit?: number;
    public offset?: string;
    private 'view_id'?: string;
    public provider?: string;
    public type?: string;
    public constructor(limit?: number, viewId?: string) { 
        this['limit'] = limit;
        this['view_id'] = viewId;
    }
    public withLimit(limit: number): ListResourcesOfResourceViewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourcesOfResourceViewRequest {
        this['offset'] = offset;
        return this;
    }
    public withViewId(viewId: string): ListResourcesOfResourceViewRequest {
        this['view_id'] = viewId;
        return this;
    }
    public set viewId(viewId: string  | undefined) {
        this['view_id'] = viewId;
    }
    public get viewId(): string | undefined {
        return this['view_id'];
    }
    public withProvider(provider: string): ListResourcesOfResourceViewRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListResourcesOfResourceViewRequest {
        this['type'] = type;
        return this;
    }
}
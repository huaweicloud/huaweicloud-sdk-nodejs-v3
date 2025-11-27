

export class CountResourcesOfResourceViewRequest {
    private 'view_id'?: string;
    public provider?: string;
    public type?: string;
    public constructor(viewId?: string) { 
        this['view_id'] = viewId;
    }
    public withViewId(viewId: string): CountResourcesOfResourceViewRequest {
        this['view_id'] = viewId;
        return this;
    }
    public set viewId(viewId: string  | undefined) {
        this['view_id'] = viewId;
    }
    public get viewId(): string | undefined {
        return this['view_id'];
    }
    public withProvider(provider: string): CountResourcesOfResourceViewRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): CountResourcesOfResourceViewRequest {
        this['type'] = type;
        return this;
    }
}


export class CountMultiResourcesRequest {
    public vendor?: string;
    private 'view_id'?: string;
    private 'is_resource'?: boolean;
    private 'region_id'?: string;
    public constructor(vendor?: string) { 
        this['vendor'] = vendor;
    }
    public withVendor(vendor: string): CountMultiResourcesRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withViewId(viewId: string): CountMultiResourcesRequest {
        this['view_id'] = viewId;
        return this;
    }
    public set viewId(viewId: string  | undefined) {
        this['view_id'] = viewId;
    }
    public get viewId(): string | undefined {
        return this['view_id'];
    }
    public withIsResource(isResource: boolean): CountMultiResourcesRequest {
        this['is_resource'] = isResource;
        return this;
    }
    public set isResource(isResource: boolean  | undefined) {
        this['is_resource'] = isResource;
    }
    public get isResource(): boolean | undefined {
        return this['is_resource'];
    }
    public withRegionId(regionId: string): CountMultiResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}
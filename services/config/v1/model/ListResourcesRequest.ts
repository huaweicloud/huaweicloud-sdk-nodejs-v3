

export class ListResourcesRequest {
    public provider: string;
    public type: string;
    private 'region_id'?: string | undefined;
    private 'ep_id'?: string | undefined;
    public tag?: { [key: string]: Array<string>; };
    public limit?: number;
    public marker?: string;
    public constructor(provider?: any, type?: any) { 
        this['provider'] = provider;
        this['type'] = type;
    }
    public withProvider(provider: string): ListResourcesRequest {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ListResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ListResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withEpId(epId: string): ListResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string | undefined) {
        this['ep_id'] = epId;
    }
    public get epId() {
        return this['ep_id'];
    }
    public withTag(tag: { [key: string]: Array<string>; }): ListResourcesRequest {
        this['tag'] = tag;
        return this;
    }
    public withLimit(limit: number): ListResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourcesRequest {
        this['marker'] = marker;
        return this;
    }
}
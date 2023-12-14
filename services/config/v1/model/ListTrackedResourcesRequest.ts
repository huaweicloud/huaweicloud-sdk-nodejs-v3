

export class ListTrackedResourcesRequest {
    private 'region_id'?: string;
    private 'ep_id'?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withRegionId(regionId: string): ListTrackedResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEpId(epId: string): ListTrackedResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withType(type: string): ListTrackedResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListTrackedResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrackedResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListTrackedResourcesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListTrackedResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<string>): ListTrackedResourcesRequest {
        this['tags'] = tags;
        return this;
    }
}
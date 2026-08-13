

export class ListAllResourcesRequest {
    private 'region_id'?: string;
    private 'ep_id'?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    public tags?: Array<string>;
    private 'group_id'?: string;
    private 'sort_key'?: Array<string>;
    private 'sort_value'?: Array<string>;
    public constructor() { 
    }
    public withRegionId(regionId: string): ListAllResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEpId(epId: string): ListAllResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withType(type: string): ListAllResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListAllResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAllResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListAllResourcesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAllResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<string>): ListAllResourcesRequest {
        this['tags'] = tags;
        return this;
    }
    public withGroupId(groupId: string): ListAllResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withSortKey(sortKey: Array<string>): ListAllResourcesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortValue(sortValue: Array<string>): ListAllResourcesRequest {
        this['sort_value'] = sortValue;
        return this;
    }
    public set sortValue(sortValue: Array<string>  | undefined) {
        this['sort_value'] = sortValue;
    }
    public get sortValue(): Array<string> | undefined {
        return this['sort_value'];
    }
}


export class ShowFlavorCapacityRequest {
    private 'flavor_id'?: string;
    public count?: string;
    private 'region_ids'?: string;
    public constructor(flavorId?: string) { 
        this['flavor_id'] = flavorId;
    }
    public withFlavorId(flavorId: string): ShowFlavorCapacityRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withCount(count: string): ShowFlavorCapacityRequest {
        this['count'] = count;
        return this;
    }
    public withRegionIds(regionIds: string): ShowFlavorCapacityRequest {
        this['region_ids'] = regionIds;
        return this;
    }
    public set regionIds(regionIds: string  | undefined) {
        this['region_ids'] = regionIds;
    }
    public get regionIds(): string | undefined {
        return this['region_ids'];
    }
}
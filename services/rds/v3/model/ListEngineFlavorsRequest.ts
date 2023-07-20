

export class ListEngineFlavorsRequest {
    private 'instance_id'?: string;
    private 'availability_zone_ids'?: string;
    private 'ha_mode'?: string;
    private 'spec_code_like'?: string;
    private 'flavor_category_type'?: string;
    private 'is_rha_flavor'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, availabilityZoneIds?: string, haMode?: string) { 
        this['instance_id'] = instanceId;
        this['availability_zone_ids'] = availabilityZoneIds;
        this['ha_mode'] = haMode;
    }
    public withInstanceId(instanceId: string): ListEngineFlavorsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAvailabilityZoneIds(availabilityZoneIds: string): ListEngineFlavorsRequest {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: string  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): string | undefined {
        return this['availability_zone_ids'];
    }
    public withHaMode(haMode: string): ListEngineFlavorsRequest {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withSpecCodeLike(specCodeLike: string): ListEngineFlavorsRequest {
        this['spec_code_like'] = specCodeLike;
        return this;
    }
    public set specCodeLike(specCodeLike: string  | undefined) {
        this['spec_code_like'] = specCodeLike;
    }
    public get specCodeLike(): string | undefined {
        return this['spec_code_like'];
    }
    public withFlavorCategoryType(flavorCategoryType: string): ListEngineFlavorsRequest {
        this['flavor_category_type'] = flavorCategoryType;
        return this;
    }
    public set flavorCategoryType(flavorCategoryType: string  | undefined) {
        this['flavor_category_type'] = flavorCategoryType;
    }
    public get flavorCategoryType(): string | undefined {
        return this['flavor_category_type'];
    }
    public withIsRhaFlavor(isRhaFlavor: boolean): ListEngineFlavorsRequest {
        this['is_rha_flavor'] = isRhaFlavor;
        return this;
    }
    public set isRhaFlavor(isRhaFlavor: boolean  | undefined) {
        this['is_rha_flavor'] = isRhaFlavor;
    }
    public get isRhaFlavor(): boolean | undefined {
        return this['is_rha_flavor'];
    }
    public withOffset(offset: number): ListEngineFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEngineFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
}


export class IpRegionResponseBodyData {
    private 'region_id'?: string;
    private 'description_cn'?: string;
    private 'description_en'?: string;
    private 'region_type'?: string;
    private 'superior_region_id'?: number;
    public constructor() { 
    }
    public withRegionId(regionId: string): IpRegionResponseBodyData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDescriptionCn(descriptionCn: string): IpRegionResponseBodyData {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withDescriptionEn(descriptionEn: string): IpRegionResponseBodyData {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withRegionType(regionType: string): IpRegionResponseBodyData {
        this['region_type'] = regionType;
        return this;
    }
    public set regionType(regionType: string  | undefined) {
        this['region_type'] = regionType;
    }
    public get regionType(): string | undefined {
        return this['region_type'];
    }
    public withSuperiorRegionId(superiorRegionId: number): IpRegionResponseBodyData {
        this['superior_region_id'] = superiorRegionId;
        return this;
    }
    public set superiorRegionId(superiorRegionId: number  | undefined) {
        this['superior_region_id'] = superiorRegionId;
    }
    public get superiorRegionId(): number | undefined {
        return this['superior_region_id'];
    }
}
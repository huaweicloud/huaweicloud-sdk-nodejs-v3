

export class IpRegionResponseBodyData {
    private 'region_id'?: string;
    private 'description_cn'?: string;
    private 'description_en'?: string;
    private 'region_type'?: number;
    private 'superior_region_id'?: string;
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
    public withRegionType(regionType: number): IpRegionResponseBodyData {
        this['region_type'] = regionType;
        return this;
    }
    public set regionType(regionType: number  | undefined) {
        this['region_type'] = regionType;
    }
    public get regionType(): number | undefined {
        return this['region_type'];
    }
    public withSuperiorRegionId(superiorRegionId: string): IpRegionResponseBodyData {
        this['superior_region_id'] = superiorRegionId;
        return this;
    }
    public set superiorRegionId(superiorRegionId: string  | undefined) {
        this['superior_region_id'] = superiorRegionId;
    }
    public get superiorRegionId(): string | undefined {
        return this['superior_region_id'];
    }
}
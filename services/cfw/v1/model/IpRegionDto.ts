

export class IpRegionDto {
    private 'region_id'?: string;
    private 'description_cn'?: string;
    private 'description_en'?: string;
    private 'region_type'?: number;
    public constructor() { 
    }
    public withRegionId(regionId: string): IpRegionDto {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDescriptionCn(descriptionCn: string): IpRegionDto {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withDescriptionEn(descriptionEn: string): IpRegionDto {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withRegionType(regionType: number): IpRegionDto {
        this['region_type'] = regionType;
        return this;
    }
    public set regionType(regionType: number  | undefined) {
        this['region_type'] = regionType;
    }
    public get regionType(): number | undefined {
        return this['region_type'];
    }
}
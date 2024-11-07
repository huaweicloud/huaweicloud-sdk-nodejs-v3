

export class BandwidthPackageSite {
    public id?: string;
    private 'site_code'?: string;
    private 'region_id'?: string;
    private 'site_type'?: string;
    private 'name_cn'?: string;
    private 'name_en'?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): BandwidthPackageSite {
        this['id'] = id;
        return this;
    }
    public withSiteCode(siteCode: string): BandwidthPackageSite {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withRegionId(regionId: string): BandwidthPackageSite {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSiteType(siteType: string): BandwidthPackageSite {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): string | undefined {
        return this['site_type'];
    }
    public withNameCn(nameCn: string): BandwidthPackageSite {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNameEn(nameEn: string): BandwidthPackageSite {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDescription(description: string): BandwidthPackageSite {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): BandwidthPackageSite {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): BandwidthPackageSite {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}
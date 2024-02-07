

export class ListSupportInstancesSupportRegions {
    public id?: string;
    private 'instance_type'?: string;
    private 'public_border_group'?: string;
    private 'region_id'?: string;
    private 'access_site'?: string;
    public status?: ListSupportInstancesSupportRegionsStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): ListSupportInstancesSupportRegions {
        this['id'] = id;
        return this;
    }
    public withInstanceType(instanceType: string): ListSupportInstancesSupportRegions {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListSupportInstancesSupportRegions {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withRegionId(regionId: string): ListSupportInstancesSupportRegions {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withAccessSite(accessSite: string): ListSupportInstancesSupportRegions {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withStatus(status: ListSupportInstancesSupportRegionsStatusEnum | string): ListSupportInstancesSupportRegions {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): ListSupportInstancesSupportRegions {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListSupportInstancesSupportRegions {
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

/**
    * @export
    * @enum {string}
    */
export enum ListSupportInstancesSupportRegionsStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

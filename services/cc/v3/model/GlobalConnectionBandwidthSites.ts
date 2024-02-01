import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { SiteGroupReferenceInfo } from './SiteGroupReferenceInfo';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class GlobalConnectionBandwidthSites {
    public id?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'name_en'?: string;
    private 'name_cn'?: string;
    private 'site_code'?: string;
    private 'site_type'?: GlobalConnectionBandwidthSitesSiteTypeEnum | string;
    private 'service_list'?: string;
    private 'group_list'?: Array<SiteGroupReferenceInfo>;
    private 'region_id'?: string;
    private 'public_border_group'?: string;
    public constructor(id?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): GlobalConnectionBandwidthSites {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): GlobalConnectionBandwidthSites {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): GlobalConnectionBandwidthSites {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): GlobalConnectionBandwidthSites {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withNameEn(nameEn: string): GlobalConnectionBandwidthSites {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCn(nameCn: string): GlobalConnectionBandwidthSites {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withSiteCode(siteCode: string): GlobalConnectionBandwidthSites {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withSiteType(siteType: GlobalConnectionBandwidthSitesSiteTypeEnum | string): GlobalConnectionBandwidthSites {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: GlobalConnectionBandwidthSitesSiteTypeEnum | string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): GlobalConnectionBandwidthSitesSiteTypeEnum | string | undefined {
        return this['site_type'];
    }
    public withServiceList(serviceList: string): GlobalConnectionBandwidthSites {
        this['service_list'] = serviceList;
        return this;
    }
    public set serviceList(serviceList: string  | undefined) {
        this['service_list'] = serviceList;
    }
    public get serviceList(): string | undefined {
        return this['service_list'];
    }
    public withGroupList(groupList: Array<SiteGroupReferenceInfo>): GlobalConnectionBandwidthSites {
        this['group_list'] = groupList;
        return this;
    }
    public set groupList(groupList: Array<SiteGroupReferenceInfo>  | undefined) {
        this['group_list'] = groupList;
    }
    public get groupList(): Array<SiteGroupReferenceInfo> | undefined {
        return this['group_list'];
    }
    public withRegionId(regionId: string): GlobalConnectionBandwidthSites {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): GlobalConnectionBandwidthSites {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthSitesSiteTypeEnum {
    AREA = 'Area',
    SUBAREA = 'SubArea',
    REGION = 'Region'
}

import { BaselineCatalogModel } from './BaselineCatalogModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompliancePackageDetailResponse extends SdkResponse {
    public uuid?: string;
    public name?: string;
    public version?: string;
    public owner?: string;
    private 'spec_catalog_vo_list'?: Array<BaselineCatalogModel>;
    public description?: string;
    public classify?: string;
    public areas?: string;
    public region?: string;
    public state?: number;
    public type?: number;
    private 'check_items_num'?: number;
    private 'has_auto_check_items'?: boolean;
    public constructor() { 
        super();
    }
    public withUuid(uuid: string): ShowCompliancePackageDetailResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): ShowCompliancePackageDetailResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ShowCompliancePackageDetailResponse {
        this['version'] = version;
        return this;
    }
    public withOwner(owner: string): ShowCompliancePackageDetailResponse {
        this['owner'] = owner;
        return this;
    }
    public withSpecCatalogVoList(specCatalogVoList: Array<BaselineCatalogModel>): ShowCompliancePackageDetailResponse {
        this['spec_catalog_vo_list'] = specCatalogVoList;
        return this;
    }
    public set specCatalogVoList(specCatalogVoList: Array<BaselineCatalogModel>  | undefined) {
        this['spec_catalog_vo_list'] = specCatalogVoList;
    }
    public get specCatalogVoList(): Array<BaselineCatalogModel> | undefined {
        return this['spec_catalog_vo_list'];
    }
    public withDescription(description: string): ShowCompliancePackageDetailResponse {
        this['description'] = description;
        return this;
    }
    public withClassify(classify: string): ShowCompliancePackageDetailResponse {
        this['classify'] = classify;
        return this;
    }
    public withAreas(areas: string): ShowCompliancePackageDetailResponse {
        this['areas'] = areas;
        return this;
    }
    public withRegion(region: string): ShowCompliancePackageDetailResponse {
        this['region'] = region;
        return this;
    }
    public withState(state: number): ShowCompliancePackageDetailResponse {
        this['state'] = state;
        return this;
    }
    public withType(type: number): ShowCompliancePackageDetailResponse {
        this['type'] = type;
        return this;
    }
    public withCheckItemsNum(checkItemsNum: number): ShowCompliancePackageDetailResponse {
        this['check_items_num'] = checkItemsNum;
        return this;
    }
    public set checkItemsNum(checkItemsNum: number  | undefined) {
        this['check_items_num'] = checkItemsNum;
    }
    public get checkItemsNum(): number | undefined {
        return this['check_items_num'];
    }
    public withHasAutoCheckItems(hasAutoCheckItems: boolean): ShowCompliancePackageDetailResponse {
        this['has_auto_check_items'] = hasAutoCheckItems;
        return this;
    }
    public set hasAutoCheckItems(hasAutoCheckItems: boolean  | undefined) {
        this['has_auto_check_items'] = hasAutoCheckItems;
    }
    public get hasAutoCheckItems(): boolean | undefined {
        return this['has_auto_check_items'];
    }
}
import { BaselineCatalogModel } from './BaselineCatalogModel';


export class CompliancePackageModel {
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
    public constructor(uuid?: string, name?: string, state?: number) { 
        this['uuid'] = uuid;
        this['name'] = name;
        this['state'] = state;
    }
    public withUuid(uuid: string): CompliancePackageModel {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): CompliancePackageModel {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CompliancePackageModel {
        this['version'] = version;
        return this;
    }
    public withOwner(owner: string): CompliancePackageModel {
        this['owner'] = owner;
        return this;
    }
    public withSpecCatalogVoList(specCatalogVoList: Array<BaselineCatalogModel>): CompliancePackageModel {
        this['spec_catalog_vo_list'] = specCatalogVoList;
        return this;
    }
    public set specCatalogVoList(specCatalogVoList: Array<BaselineCatalogModel>  | undefined) {
        this['spec_catalog_vo_list'] = specCatalogVoList;
    }
    public get specCatalogVoList(): Array<BaselineCatalogModel> | undefined {
        return this['spec_catalog_vo_list'];
    }
    public withDescription(description: string): CompliancePackageModel {
        this['description'] = description;
        return this;
    }
    public withClassify(classify: string): CompliancePackageModel {
        this['classify'] = classify;
        return this;
    }
    public withAreas(areas: string): CompliancePackageModel {
        this['areas'] = areas;
        return this;
    }
    public withRegion(region: string): CompliancePackageModel {
        this['region'] = region;
        return this;
    }
    public withState(state: number): CompliancePackageModel {
        this['state'] = state;
        return this;
    }
    public withType(type: number): CompliancePackageModel {
        this['type'] = type;
        return this;
    }
    public withCheckItemsNum(checkItemsNum: number): CompliancePackageModel {
        this['check_items_num'] = checkItemsNum;
        return this;
    }
    public set checkItemsNum(checkItemsNum: number  | undefined) {
        this['check_items_num'] = checkItemsNum;
    }
    public get checkItemsNum(): number | undefined {
        return this['check_items_num'];
    }
    public withHasAutoCheckItems(hasAutoCheckItems: boolean): CompliancePackageModel {
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
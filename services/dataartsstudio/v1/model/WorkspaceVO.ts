import { ModelLevel } from './ModelLevel';


export class WorkspaceVO {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'is_physical'?: boolean;
    public frequent?: boolean;
    public top?: boolean;
    public level?: ModelLevel;
    private 'dw_type'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public type?: WorkspaceVOTypeEnum | string;
    private 'biz_catalog_ids'?: string;
    public databases?: Array<string>;
    private 'table_model_prefix'?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withId(id: string): WorkspaceVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkspaceVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkspaceVO {
        this['description'] = description;
        return this;
    }
    public withIsPhysical(isPhysical: boolean): WorkspaceVO {
        this['is_physical'] = isPhysical;
        return this;
    }
    public set isPhysical(isPhysical: boolean  | undefined) {
        this['is_physical'] = isPhysical;
    }
    public get isPhysical(): boolean | undefined {
        return this['is_physical'];
    }
    public withFrequent(frequent: boolean): WorkspaceVO {
        this['frequent'] = frequent;
        return this;
    }
    public withTop(top: boolean): WorkspaceVO {
        this['top'] = top;
        return this;
    }
    public withLevel(level: ModelLevel): WorkspaceVO {
        this['level'] = level;
        return this;
    }
    public withDwType(dwType: string): WorkspaceVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withCreateTime(createTime: Date): WorkspaceVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): WorkspaceVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): WorkspaceVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): WorkspaceVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withType(type: WorkspaceVOTypeEnum | string): WorkspaceVO {
        this['type'] = type;
        return this;
    }
    public withBizCatalogIds(bizCatalogIds: string): WorkspaceVO {
        this['biz_catalog_ids'] = bizCatalogIds;
        return this;
    }
    public set bizCatalogIds(bizCatalogIds: string  | undefined) {
        this['biz_catalog_ids'] = bizCatalogIds;
    }
    public get bizCatalogIds(): string | undefined {
        return this['biz_catalog_ids'];
    }
    public withDatabases(databases: Array<string>): WorkspaceVO {
        this['databases'] = databases;
        return this;
    }
    public withTableModelPrefix(tableModelPrefix: string): WorkspaceVO {
        this['table_model_prefix'] = tableModelPrefix;
        return this;
    }
    public set tableModelPrefix(tableModelPrefix: string  | undefined) {
        this['table_model_prefix'] = tableModelPrefix;
    }
    public get tableModelPrefix(): string | undefined {
        return this['table_model_prefix'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WorkspaceVOTypeEnum {
    THIRD_NF = 'THIRD_NF',
    DIMENSION = 'DIMENSION'
}

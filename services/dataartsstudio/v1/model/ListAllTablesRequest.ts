

export class ListAllTablesRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public status?: ListAllTablesRequestStatusEnum | string;
    private 'sync_status'?: ListAllTablesRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListAllTablesRequestSyncKeyEnum> | Array<string>;
    private 'biz_catalog_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'biz_catalog_id_list'?: Array<number>;
    private 'biz_type_list'?: Array<ListAllTablesRequestBizTypeListEnum> | Array<string>;
    public constructor(workspace?: string, bizTypeList?: Array<string>) { 
        this['workspace'] = workspace;
        this['biz_type_list'] = bizTypeList;
    }
    public withWorkspace(workspace: string): ListAllTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListAllTablesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListAllTablesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withStatus(status: ListAllTablesRequestStatusEnum | string): ListAllTablesRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListAllTablesRequestSyncStatusEnum | string): ListAllTablesRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListAllTablesRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListAllTablesRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListAllTablesRequestSyncKeyEnum> | Array<string>): ListAllTablesRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListAllTablesRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListAllTablesRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withBizCatalogId(bizCatalogId: string): ListAllTablesRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withBeginTime(beginTime: string): ListAllTablesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListAllTablesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListAllTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAllTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withBizCatalogIdList(bizCatalogIdList: Array<number>): ListAllTablesRequest {
        this['biz_catalog_id_list'] = bizCatalogIdList;
        return this;
    }
    public set bizCatalogIdList(bizCatalogIdList: Array<number>  | undefined) {
        this['biz_catalog_id_list'] = bizCatalogIdList;
    }
    public get bizCatalogIdList(): Array<number> | undefined {
        return this['biz_catalog_id_list'];
    }
    public withBizTypeList(bizTypeList: Array<ListAllTablesRequestBizTypeListEnum> | Array<string>): ListAllTablesRequest {
        this['biz_type_list'] = bizTypeList;
        return this;
    }
    public set bizTypeList(bizTypeList: Array<ListAllTablesRequestBizTypeListEnum> | Array<string>  | undefined) {
        this['biz_type_list'] = bizTypeList;
    }
    public get bizTypeList(): Array<ListAllTablesRequestBizTypeListEnum> | Array<string> | undefined {
        return this['biz_type_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllTablesRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllTablesRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllTablesRequestSyncKeyEnum {
    BUSINESS_ASSET = 'BUSINESS_ASSET',
    DATA_QUALITY = 'DATA_QUALITY',
    TECHNICAL_ASSET = 'TECHNICAL_ASSET',
    META_DATA_LINK = 'META_DATA_LINK',
    PHYSICAL_TABLE = 'PHYSICAL_TABLE',
    DLF_TASK = 'DLF_TASK',
    MATERIALIZATION = 'MATERIALIZATION'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllTablesRequestBizTypeListEnum {
    TABLE_MODEL_LOGIC = 'TABLE_MODEL_LOGIC',
    TABLE_MODEL = 'TABLE_MODEL',
    DIMENSION_LOGIC_TABLE = 'DIMENSION_LOGIC_TABLE',
    FACT_LOGIC_TABLE = 'FACT_LOGIC_TABLE',
    AGGREGATION_LOGIC_TABLE = 'AGGREGATION_LOGIC_TABLE'
}

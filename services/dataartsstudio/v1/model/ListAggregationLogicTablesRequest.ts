

export class ListAggregationLogicTablesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public owner?: string;
    public status?: ListAggregationLogicTablesRequestStatusEnum | string;
    private 'sync_status'?: ListAggregationLogicTablesRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListAggregationLogicTablesRequestSyncKeyEnum> | Array<string>;
    private 'l3_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'biz_catalog_id'?: string;
    private 'auto_generate'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListAggregationLogicTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListAggregationLogicTablesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListAggregationLogicTablesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListAggregationLogicTablesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListAggregationLogicTablesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListAggregationLogicTablesRequest {
        this['approver'] = approver;
        return this;
    }
    public withOwner(owner: string): ListAggregationLogicTablesRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: ListAggregationLogicTablesRequestStatusEnum | string): ListAggregationLogicTablesRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListAggregationLogicTablesRequestSyncStatusEnum | string): ListAggregationLogicTablesRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListAggregationLogicTablesRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListAggregationLogicTablesRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListAggregationLogicTablesRequestSyncKeyEnum> | Array<string>): ListAggregationLogicTablesRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListAggregationLogicTablesRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListAggregationLogicTablesRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withL3Id(l3Id: string): ListAggregationLogicTablesRequest {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withBeginTime(beginTime: string): ListAggregationLogicTablesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListAggregationLogicTablesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListAggregationLogicTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAggregationLogicTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withBizCatalogId(bizCatalogId: string): ListAggregationLogicTablesRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withAutoGenerate(autoGenerate: boolean): ListAggregationLogicTablesRequest {
        this['auto_generate'] = autoGenerate;
        return this;
    }
    public set autoGenerate(autoGenerate: boolean  | undefined) {
        this['auto_generate'] = autoGenerate;
    }
    public get autoGenerate(): boolean | undefined {
        return this['auto_generate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAggregationLogicTablesRequestStatusEnum {
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
export enum ListAggregationLogicTablesRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAggregationLogicTablesRequestSyncKeyEnum {
    BUSINESS_ASSET = 'BUSINESS_ASSET',
    DATA_QUALITY = 'DATA_QUALITY',
    TECHNICAL_ASSET = 'TECHNICAL_ASSET',
    META_DATA_LINK = 'META_DATA_LINK',
    PHYSICAL_TABLE = 'PHYSICAL_TABLE',
    DEV_PHYSICAL_TABLE = 'DEV_PHYSICAL_TABLE',
    DLF_TASK = 'DLF_TASK',
    MATERIALIZATION = 'MATERIALIZATION',
    PUBLISH_TO_DLM = 'PUBLISH_TO_DLM',
    SUMMARY_STATUS = 'SUMMARY_STATUS'
}



export class ListDimensionLogicTablesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public owner?: string;
    public status?: ListDimensionLogicTablesRequestStatusEnum | string;
    private 'sync_status'?: ListDimensionLogicTablesRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListDimensionLogicTablesRequestSyncKeyEnum> | Array<string>;
    private 'l2_id'?: string;
    private 'dimension_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'biz_catalog_id'?: string;
    private 'dimension_type'?: ListDimensionLogicTablesRequestDimensionTypeEnum | string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDimensionLogicTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListDimensionLogicTablesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListDimensionLogicTablesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListDimensionLogicTablesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListDimensionLogicTablesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListDimensionLogicTablesRequest {
        this['approver'] = approver;
        return this;
    }
    public withOwner(owner: string): ListDimensionLogicTablesRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: ListDimensionLogicTablesRequestStatusEnum | string): ListDimensionLogicTablesRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListDimensionLogicTablesRequestSyncStatusEnum | string): ListDimensionLogicTablesRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListDimensionLogicTablesRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListDimensionLogicTablesRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListDimensionLogicTablesRequestSyncKeyEnum> | Array<string>): ListDimensionLogicTablesRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListDimensionLogicTablesRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListDimensionLogicTablesRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withL2Id(l2Id: string): ListDimensionLogicTablesRequest {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withDimensionId(dimensionId: string): ListDimensionLogicTablesRequest {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: string  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): string | undefined {
        return this['dimension_id'];
    }
    public withBeginTime(beginTime: string): ListDimensionLogicTablesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListDimensionLogicTablesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListDimensionLogicTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDimensionLogicTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withBizCatalogId(bizCatalogId: string): ListDimensionLogicTablesRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withDimensionType(dimensionType: ListDimensionLogicTablesRequestDimensionTypeEnum | string): ListDimensionLogicTablesRequest {
        this['dimension_type'] = dimensionType;
        return this;
    }
    public set dimensionType(dimensionType: ListDimensionLogicTablesRequestDimensionTypeEnum | string  | undefined) {
        this['dimension_type'] = dimensionType;
    }
    public get dimensionType(): ListDimensionLogicTablesRequestDimensionTypeEnum | string | undefined {
        return this['dimension_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDimensionLogicTablesRequestStatusEnum {
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
export enum ListDimensionLogicTablesRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDimensionLogicTablesRequestSyncKeyEnum {
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
/**
    * @export
    * @enum {string}
    */
export enum ListDimensionLogicTablesRequestDimensionTypeEnum {
    COMMON = 'COMMON',
    LOOKUP = 'LOOKUP',
    HIERARCHIES = 'HIERARCHIES'
}

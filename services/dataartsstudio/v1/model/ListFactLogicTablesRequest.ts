

export class ListFactLogicTablesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public owner?: string;
    public status?: ListFactLogicTablesRequestStatusEnum | string;
    private 'sync_status'?: ListFactLogicTablesRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListFactLogicTablesRequestSyncKeyEnum> | Array<string>;
    private 'l3_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'biz_catalog_id'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactLogicTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListFactLogicTablesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListFactLogicTablesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListFactLogicTablesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListFactLogicTablesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListFactLogicTablesRequest {
        this['approver'] = approver;
        return this;
    }
    public withOwner(owner: string): ListFactLogicTablesRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: ListFactLogicTablesRequestStatusEnum | string): ListFactLogicTablesRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListFactLogicTablesRequestSyncStatusEnum | string): ListFactLogicTablesRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListFactLogicTablesRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListFactLogicTablesRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListFactLogicTablesRequestSyncKeyEnum> | Array<string>): ListFactLogicTablesRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListFactLogicTablesRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListFactLogicTablesRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withL3Id(l3Id: string): ListFactLogicTablesRequest {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withBeginTime(beginTime: string): ListFactLogicTablesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListFactLogicTablesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListFactLogicTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactLogicTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withBizCatalogId(bizCatalogId: string): ListFactLogicTablesRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFactLogicTablesRequestStatusEnum {
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
export enum ListFactLogicTablesRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFactLogicTablesRequestSyncKeyEnum {
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

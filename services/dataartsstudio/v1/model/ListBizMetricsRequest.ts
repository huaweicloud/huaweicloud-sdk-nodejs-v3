

export class ListBizMetricsRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public owner?: string;
    public status?: ListBizMetricsRequestStatusEnum | string;
    private 'sync_status'?: ListBizMetricsRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListBizMetricsRequestSyncKeyEnum> | Array<string>;
    private 'biz_catalog_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListBizMetricsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListBizMetricsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListBizMetricsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withOwner(owner: string): ListBizMetricsRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: ListBizMetricsRequestStatusEnum | string): ListBizMetricsRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListBizMetricsRequestSyncStatusEnum | string): ListBizMetricsRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListBizMetricsRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListBizMetricsRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListBizMetricsRequestSyncKeyEnum> | Array<string>): ListBizMetricsRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListBizMetricsRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListBizMetricsRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withBizCatalogId(bizCatalogId: string): ListBizMetricsRequest {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withBeginTime(beginTime: string): ListBizMetricsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListBizMetricsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListBizMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBizMetricsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBizMetricsRequestStatusEnum {
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
export enum ListBizMetricsRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBizMetricsRequestSyncKeyEnum {
    BUSINESS_ASSET = 'BUSINESS_ASSET',
    DATA_QUALITY = 'DATA_QUALITY',
    TECHNICAL_ASSET = 'TECHNICAL_ASSET',
    META_DATA_LINK = 'META_DATA_LINK',
    PHYSICAL_TABLE = 'PHYSICAL_TABLE',
    DLF_TASK = 'DLF_TASK',
    MATERIALIZATION = 'MATERIALIZATION'
}

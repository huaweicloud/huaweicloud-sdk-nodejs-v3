

export class ListTableModelsRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: ListTableModelsRequestStatusEnum | string;
    private 'sync_status'?: ListTableModelsRequestSyncStatusEnum | string;
    private 'sync_key'?: Array<ListTableModelsRequestSyncKeyEnum> | Array<string>;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'model_id'?: string;
    private 'biz_catalog_id'?: string;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): ListTableModelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListTableModelsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListTableModelsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListTableModelsRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: ListTableModelsRequestStatusEnum | string): ListTableModelsRequest {
        this['status'] = status;
        return this;
    }
    public withSyncStatus(syncStatus: ListTableModelsRequestSyncStatusEnum | string): ListTableModelsRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListTableModelsRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListTableModelsRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncKey(syncKey: Array<ListTableModelsRequestSyncKeyEnum> | Array<string>): ListTableModelsRequest {
        this['sync_key'] = syncKey;
        return this;
    }
    public set syncKey(syncKey: Array<ListTableModelsRequestSyncKeyEnum> | Array<string>  | undefined) {
        this['sync_key'] = syncKey;
    }
    public get syncKey(): Array<ListTableModelsRequestSyncKeyEnum> | Array<string> | undefined {
        return this['sync_key'];
    }
    public withBeginTime(beginTime: string): ListTableModelsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListTableModelsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListTableModelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTableModelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withModelId(modelId: string): ListTableModelsRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withBizCatalogId(bizCatalogId: string): ListTableModelsRequest {
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
export enum ListTableModelsRequestStatusEnum {
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
export enum ListTableModelsRequestSyncStatusEnum {
    RUNNING = 'RUNNING',
    NO_NEED = 'NO_NEED',
    SUMMARY_SUCCESS = 'SUMMARY_SUCCESS',
    SUMMARY_FAILED = 'SUMMARY_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTableModelsRequestSyncKeyEnum {
    BUSINESS_ASSET = 'BUSINESS_ASSET',
    DATA_QUALITY = 'DATA_QUALITY',
    TECHNICAL_ASSET = 'TECHNICAL_ASSET',
    META_DATA_LINK = 'META_DATA_LINK',
    PHYSICAL_TABLE = 'PHYSICAL_TABLE',
    DLF_TASK = 'DLF_TASK',
    MATERIALIZATION = 'MATERIALIZATION'
}

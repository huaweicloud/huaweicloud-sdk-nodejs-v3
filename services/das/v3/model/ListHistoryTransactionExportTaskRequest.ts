

export class ListHistoryTransactionExportTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListHistoryTransactionExportTaskRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListHistoryTransactionExportTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListHistoryTransactionExportTaskRequestXLanguageEnum | string): ListHistoryTransactionExportTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListHistoryTransactionExportTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListHistoryTransactionExportTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListHistoryTransactionExportTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHistoryTransactionExportTaskRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHistoryTransactionExportTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

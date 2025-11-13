

export class ShowHistoryTransactionExportTaskInfoRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowHistoryTransactionExportTaskInfoRequestXLanguageEnum | string;
    private 'task_id'?: number;
    public constructor(instanceId?: string, taskId?: number) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): ShowHistoryTransactionExportTaskInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowHistoryTransactionExportTaskInfoRequestXLanguageEnum | string): ShowHistoryTransactionExportTaskInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowHistoryTransactionExportTaskInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowHistoryTransactionExportTaskInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTaskId(taskId: number): ShowHistoryTransactionExportTaskInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHistoryTransactionExportTaskInfoRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

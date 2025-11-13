import { CreateExportTaskResp } from './CreateExportTaskResp';


export class DeleteHistoryTransactionExportTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: DeleteHistoryTransactionExportTaskRequestXLanguageEnum | string;
    public body?: CreateExportTaskResp;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteHistoryTransactionExportTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: DeleteHistoryTransactionExportTaskRequestXLanguageEnum | string): DeleteHistoryTransactionExportTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteHistoryTransactionExportTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteHistoryTransactionExportTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateExportTaskResp): DeleteHistoryTransactionExportTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHistoryTransactionExportTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

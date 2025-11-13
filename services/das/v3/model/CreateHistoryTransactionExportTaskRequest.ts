import { CreateExportTaskReq } from './CreateExportTaskReq';


export class CreateHistoryTransactionExportTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateHistoryTransactionExportTaskRequestXLanguageEnum | string;
    public body?: CreateExportTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateHistoryTransactionExportTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateHistoryTransactionExportTaskRequestXLanguageEnum | string): CreateHistoryTransactionExportTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateHistoryTransactionExportTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateHistoryTransactionExportTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateExportTaskReq): CreateHistoryTransactionExportTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHistoryTransactionExportTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

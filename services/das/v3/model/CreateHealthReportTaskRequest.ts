import { CreateHealthReportReq } from './CreateHealthReportReq';


export class CreateHealthReportTaskRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: CreateHealthReportTaskRequestXLanguageEnum | string;
    public body?: CreateHealthReportReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateHealthReportTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: CreateHealthReportTaskRequestXLanguageEnum | string): CreateHealthReportTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateHealthReportTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateHealthReportTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateHealthReportReq): CreateHealthReportTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHealthReportTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

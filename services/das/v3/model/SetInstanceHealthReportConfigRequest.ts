import { SetInstanceHealthReportConfigReq } from './SetInstanceHealthReportConfigReq';


export class SetInstanceHealthReportConfigRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: SetInstanceHealthReportConfigRequestXLanguageEnum | string;
    public body?: SetInstanceHealthReportConfigReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetInstanceHealthReportConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: SetInstanceHealthReportConfigRequestXLanguageEnum | string): SetInstanceHealthReportConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetInstanceHealthReportConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetInstanceHealthReportConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetInstanceHealthReportConfigReq): SetInstanceHealthReportConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetInstanceHealthReportConfigRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

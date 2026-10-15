import { BatchSetHealthReportConfigReq } from './BatchSetHealthReportConfigReq';


export class BatchSetHealthReportConfigRequest {
    private 'X-Language'?: BatchSetHealthReportConfigRequestXLanguageEnum | string;
    public body?: BatchSetHealthReportConfigReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetHealthReportConfigRequestXLanguageEnum | string): BatchSetHealthReportConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetHealthReportConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSetHealthReportConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchSetHealthReportConfigReq): BatchSetHealthReportConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetHealthReportConfigRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

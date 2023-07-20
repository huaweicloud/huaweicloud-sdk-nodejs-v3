import { BatchQueryJobReq } from './BatchQueryJobReq';


export class ShowMonitoringDataRequest {
    private 'X-Language'?: ShowMonitoringDataRequestXLanguageEnum | string;
    public body?: BatchQueryJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowMonitoringDataRequestXLanguageEnum | string): ShowMonitoringDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowMonitoringDataRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowMonitoringDataRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryJobReq): ShowMonitoringDataRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMonitoringDataRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

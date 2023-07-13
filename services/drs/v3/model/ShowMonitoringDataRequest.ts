import { BatchQueryJobReq } from './BatchQueryJobReq';


export class ShowMonitoringDataRequest {
    private 'X-Language'?: ShowMonitoringDataRequestXLanguageEnum | undefined;
    public body?: BatchQueryJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowMonitoringDataRequestXLanguageEnum): ShowMonitoringDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowMonitoringDataRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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

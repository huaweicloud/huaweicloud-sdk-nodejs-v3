import { ApiSetMetricCodeThresholdReq } from './ApiSetMetricCodeThresholdReq';


export class SetThresholdForMetricRequest {
    private 'X-Language'?: SetThresholdForMetricRequestXLanguageEnum | string;
    public body?: ApiSetMetricCodeThresholdReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: SetThresholdForMetricRequestXLanguageEnum | string): SetThresholdForMetricRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetThresholdForMetricRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetThresholdForMetricRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ApiSetMetricCodeThresholdReq): SetThresholdForMetricRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetThresholdForMetricRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

import { SynchronizeInstancesReq } from './SynchronizeInstancesReq';


export class SynchronizeInstancesRequest {
    private 'X-Language'?: SynchronizeInstancesRequestXLanguageEnum | string;
    public body?: SynchronizeInstancesReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: SynchronizeInstancesRequestXLanguageEnum | string): SynchronizeInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SynchronizeInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SynchronizeInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SynchronizeInstancesReq): SynchronizeInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SynchronizeInstancesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

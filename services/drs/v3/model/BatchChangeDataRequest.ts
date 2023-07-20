import { BatchDataTransformationReq } from './BatchDataTransformationReq';


export class BatchChangeDataRequest {
    private 'X-Language'?: BatchChangeDataRequestXLanguageEnum | string;
    public body?: BatchDataTransformationReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchChangeDataRequestXLanguageEnum | string): BatchChangeDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchChangeDataRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchChangeDataRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDataTransformationReq): BatchChangeDataRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchChangeDataRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

import { BatchChangeInstanceSpecificationRequestBody } from './BatchChangeInstanceSpecificationRequestBody';


export class BatchChangeInstanceSpecificationRequest {
    private 'X-Language'?: BatchChangeInstanceSpecificationRequestXLanguageEnum | string;
    public body?: BatchChangeInstanceSpecificationRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchChangeInstanceSpecificationRequestXLanguageEnum | string): BatchChangeInstanceSpecificationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchChangeInstanceSpecificationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchChangeInstanceSpecificationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchChangeInstanceSpecificationRequestBody): BatchChangeInstanceSpecificationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchChangeInstanceSpecificationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

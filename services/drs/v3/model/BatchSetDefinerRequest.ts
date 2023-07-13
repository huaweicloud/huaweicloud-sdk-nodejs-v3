import { BatchReplaceDefinerReq } from './BatchReplaceDefinerReq';


export class BatchSetDefinerRequest {
    private 'X-Language'?: BatchSetDefinerRequestXLanguageEnum | undefined;
    public body?: BatchReplaceDefinerReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetDefinerRequestXLanguageEnum): BatchSetDefinerRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetDefinerRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchReplaceDefinerReq): BatchSetDefinerRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetDefinerRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

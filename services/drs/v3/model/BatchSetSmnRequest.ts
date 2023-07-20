import { BatchImportSmnInfoReq } from './BatchImportSmnInfoReq';


export class BatchSetSmnRequest {
    private 'X-Language'?: BatchSetSmnRequestXLanguageEnum | string;
    public body?: BatchImportSmnInfoReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetSmnRequestXLanguageEnum | string): BatchSetSmnRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetSmnRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSetSmnRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchImportSmnInfoReq): BatchSetSmnRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetSmnRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

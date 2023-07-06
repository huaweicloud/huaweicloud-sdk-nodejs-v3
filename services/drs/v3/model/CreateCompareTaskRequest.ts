import { CreateCompareTaskReq } from './CreateCompareTaskReq';


export class CreateCompareTaskRequest {
    private 'X-Language'?: CreateCompareTaskRequestXLanguageEnum | undefined;
    public body?: CreateCompareTaskReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateCompareTaskRequestXLanguageEnum): CreateCompareTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateCompareTaskRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: CreateCompareTaskReq): CreateCompareTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCompareTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

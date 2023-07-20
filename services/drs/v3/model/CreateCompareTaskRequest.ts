import { CreateCompareTaskReq } from './CreateCompareTaskReq';


export class CreateCompareTaskRequest {
    private 'X-Language'?: CreateCompareTaskRequestXLanguageEnum | string;
    public body?: CreateCompareTaskReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateCompareTaskRequestXLanguageEnum | string): CreateCompareTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateCompareTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateCompareTaskRequestXLanguageEnum | string | undefined {
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

import { ModifyHotfixesRequestBody } from './ModifyHotfixesRequestBody';


export class ModifyHotfixesRequest {
    private 'X-Language'?: ModifyHotfixesRequestXLanguageEnum | string;
    public body?: ModifyHotfixesRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ModifyHotfixesRequestXLanguageEnum | string): ModifyHotfixesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyHotfixesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyHotfixesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyHotfixesRequestBody): ModifyHotfixesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyHotfixesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

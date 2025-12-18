import { ExportInstanceInfosRequestBody } from './ExportInstanceInfosRequestBody';


export class ExportInstanceInfosRequest {
    private 'X-Language'?: ExportInstanceInfosRequestXLanguageEnum | string;
    public body?: ExportInstanceInfosRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ExportInstanceInfosRequestXLanguageEnum | string): ExportInstanceInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportInstanceInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportInstanceInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportInstanceInfosRequestBody): ExportInstanceInfosRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportInstanceInfosRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

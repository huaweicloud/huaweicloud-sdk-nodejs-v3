import { ExportJobsReq } from './ExportJobsReq';


export class ExportJobListRequest {
    private 'X-Language'?: ExportJobListRequestXLanguageEnum | string;
    public body?: ExportJobsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ExportJobListRequestXLanguageEnum | string): ExportJobListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportJobListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportJobListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportJobsReq): ExportJobListRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportJobListRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}

import { ListHealthReportConfigsReq } from './ListHealthReportConfigsReq';


export class ListHealthReportConfigsRequest {
    private 'X-Language'?: ListHealthReportConfigsRequestXLanguageEnum | string;
    public body?: ListHealthReportConfigsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListHealthReportConfigsRequestXLanguageEnum | string): ListHealthReportConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListHealthReportConfigsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListHealthReportConfigsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ListHealthReportConfigsReq): ListHealthReportConfigsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHealthReportConfigsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

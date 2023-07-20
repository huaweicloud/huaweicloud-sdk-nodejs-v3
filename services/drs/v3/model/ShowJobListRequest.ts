import { QueryJobsReq } from './QueryJobsReq';


export class ShowJobListRequest {
    private 'X-Language'?: ShowJobListRequestXLanguageEnum | string;
    public body?: QueryJobsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowJobListRequestXLanguageEnum | string): ShowJobListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowJobListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowJobListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryJobsReq): ShowJobListRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobListRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

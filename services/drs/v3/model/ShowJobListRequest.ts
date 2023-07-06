import { QueryJobsReq } from './QueryJobsReq';


export class ShowJobListRequest {
    private 'X-Language'?: ShowJobListRequestXLanguageEnum | undefined;
    public body?: QueryJobsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowJobListRequestXLanguageEnum): ShowJobListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowJobListRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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

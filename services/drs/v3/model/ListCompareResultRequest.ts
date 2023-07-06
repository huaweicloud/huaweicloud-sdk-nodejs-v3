import { QueryCompareResultReq } from './QueryCompareResultReq';


export class ListCompareResultRequest {
    private 'X-Language'?: ListCompareResultRequestXLanguageEnum | undefined;
    public body?: QueryCompareResultReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListCompareResultRequestXLanguageEnum): ListCompareResultRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCompareResultRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: QueryCompareResultReq): ListCompareResultRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCompareResultRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

import { QuerySubscriptionsReq } from './QuerySubscriptionsReq';


export class ShowSubscriptionListsRequest {
    private 'X-Language'?: ShowSubscriptionListsRequestXLanguageEnum | string;
    public limit?: number;
    public offset?: number;
    public body?: QuerySubscriptionsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowSubscriptionListsRequestXLanguageEnum | string): ShowSubscriptionListsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSubscriptionListsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSubscriptionListsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ShowSubscriptionListsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowSubscriptionListsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QuerySubscriptionsReq): ShowSubscriptionListsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSubscriptionListsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

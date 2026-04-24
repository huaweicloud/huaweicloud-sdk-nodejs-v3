import { SingleCreateSubscriptionReq } from './SingleCreateSubscriptionReq';


export class CreateSubscriptionRequest {
    private 'X-Language'?: CreateSubscriptionRequestXLanguageEnum | string;
    public body?: SingleCreateSubscriptionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateSubscriptionRequestXLanguageEnum | string): CreateSubscriptionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSubscriptionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSubscriptionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SingleCreateSubscriptionReq): CreateSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSubscriptionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

import { OrderInfoReq } from './OrderInfoReq';


export class CreateSubscriptionOrderRequest {
    private 'X-Language'?: CreateSubscriptionOrderRequestXLanguageEnum | string;
    public body?: OrderInfoReq;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: CreateSubscriptionOrderRequestXLanguageEnum | string): CreateSubscriptionOrderRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSubscriptionOrderRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSubscriptionOrderRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OrderInfoReq): CreateSubscriptionOrderRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSubscriptionOrderRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

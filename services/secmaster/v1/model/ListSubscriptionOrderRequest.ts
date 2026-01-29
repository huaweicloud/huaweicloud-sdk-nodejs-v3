

export class ListSubscriptionOrderRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    public page?: ListSubscriptionOrderRequestPageEnum | string;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): ListSubscriptionOrderRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListSubscriptionOrderRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionOrderRequest {
        this['limit'] = limit;
        return this;
    }
    public withPage(page: ListSubscriptionOrderRequestPageEnum | string): ListSubscriptionOrderRequest {
        this['page'] = page;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubscriptionOrderRequestPageEnum {
    DEFAULT = 'DEFAULT',
    PURCHASE = 'PURCHASE',
    SMN = 'SMN',
    USAGE = 'USAGE',
    RESOURCE_LIST = 'RESOURCE_LIST'
}

import { UpdateOrderInfoReq } from './UpdateOrderInfoReq';


export class UpdateSubscriptionOrderRequest {
    private 'X-Language'?: string;
    public body?: UpdateOrderInfoReq;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): UpdateSubscriptionOrderRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateOrderInfoReq): UpdateSubscriptionOrderRequest {
        this['body'] = body;
        return this;
    }
}
import { UnsubscribeParam } from './UnsubscribeParam';


export class DeleteSubscriptionOrderRequest {
    private 'X-Language'?: string;
    public body?: UnsubscribeParam;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): DeleteSubscriptionOrderRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UnsubscribeParam): DeleteSubscriptionOrderRequest {
        this['body'] = body;
        return this;
    }
}
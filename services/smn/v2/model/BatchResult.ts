

export class BatchResult {
    public code?: string;
    public message?: string;
    private 'subscription_urn'?: string;
    public constructor() { 
    }
    public withCode(code: string): BatchResult {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): BatchResult {
        this['message'] = message;
        return this;
    }
    public withSubscriptionUrn(subscriptionUrn: string): BatchResult {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
}
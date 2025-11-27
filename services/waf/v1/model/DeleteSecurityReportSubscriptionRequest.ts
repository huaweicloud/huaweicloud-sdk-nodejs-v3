

export class DeleteSecurityReportSubscriptionRequest {
    private 'subscription_id'?: string;
    private 'Content-Type'?: string;
    public constructor(subscriptionId?: string, contentType?: string) { 
        this['subscription_id'] = subscriptionId;
        this['Content-Type'] = contentType;
    }
    public withSubscriptionId(subscriptionId: string): DeleteSecurityReportSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withContentType(contentType: string): DeleteSecurityReportSubscriptionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}
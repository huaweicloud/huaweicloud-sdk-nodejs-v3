import { UpdateSecurityReportSubscriptionRequestBody } from './UpdateSecurityReportSubscriptionRequestBody';


export class UpdateSecurityReportSubscriptionRequest {
    private 'Content-Type'?: string;
    private 'subscription_id'?: string;
    public body?: UpdateSecurityReportSubscriptionRequestBody;
    public constructor(contentType?: string, subscriptionId?: string) { 
        this['Content-Type'] = contentType;
        this['subscription_id'] = subscriptionId;
    }
    public withContentType(contentType: string): UpdateSecurityReportSubscriptionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withSubscriptionId(subscriptionId: string): UpdateSecurityReportSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withBody(body: UpdateSecurityReportSubscriptionRequestBody): UpdateSecurityReportSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}
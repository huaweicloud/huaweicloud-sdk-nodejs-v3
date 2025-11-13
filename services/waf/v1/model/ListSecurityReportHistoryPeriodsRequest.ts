

export class ListSecurityReportHistoryPeriodsRequest {
    private 'Content-Type'?: string;
    private 'subscription_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(contentType?: string, subscriptionId?: string) { 
        this['Content-Type'] = contentType;
        this['subscription_id'] = subscriptionId;
    }
    public withContentType(contentType: string): ListSecurityReportHistoryPeriodsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withSubscriptionId(subscriptionId: string): ListSecurityReportHistoryPeriodsRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withLimit(limit: number): ListSecurityReportHistoryPeriodsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityReportHistoryPeriodsRequest {
        this['offset'] = offset;
        return this;
    }
}
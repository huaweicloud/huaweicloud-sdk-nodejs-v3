

export class ShowSecurityReportContentRequest {
    private 'Content-Type'?: string;
    private 'report_id'?: string;
    private 'subscription_id'?: string;
    public constructor(contentType?: string, reportId?: string, subscriptionId?: string) { 
        this['Content-Type'] = contentType;
        this['report_id'] = reportId;
        this['subscription_id'] = subscriptionId;
    }
    public withContentType(contentType: string): ShowSecurityReportContentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withReportId(reportId: string): ShowSecurityReportContentRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withSubscriptionId(subscriptionId: string): ShowSecurityReportContentRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
}
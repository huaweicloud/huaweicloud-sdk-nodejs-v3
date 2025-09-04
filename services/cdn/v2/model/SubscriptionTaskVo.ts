

export class SubscriptionTaskVo {
    public name?: string;
    private 'period_type'?: number;
    public emails?: string;
    private 'domain_name'?: string;
    private 'report_type'?: string;
    public constructor() { 
    }
    public withName(name: string): SubscriptionTaskVo {
        this['name'] = name;
        return this;
    }
    public withPeriodType(periodType: number): SubscriptionTaskVo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withEmails(emails: string): SubscriptionTaskVo {
        this['emails'] = emails;
        return this;
    }
    public withDomainName(domainName: string): SubscriptionTaskVo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withReportType(reportType: string): SubscriptionTaskVo {
        this['report_type'] = reportType;
        return this;
    }
    public set reportType(reportType: string  | undefined) {
        this['report_type'] = reportType;
    }
    public get reportType(): string | undefined {
        return this['report_type'];
    }
}
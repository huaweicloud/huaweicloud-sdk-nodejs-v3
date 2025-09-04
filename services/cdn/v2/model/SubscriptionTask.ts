

export class SubscriptionTask {
    public id?: number;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public name?: string;
    private 'period_type'?: number;
    public emails?: string;
    private 'domain_name'?: string;
    private 'report_type'?: string;
    public constructor() { 
    }
    public withId(id: number): SubscriptionTask {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: number): SubscriptionTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SubscriptionTask {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withName(name: string): SubscriptionTask {
        this['name'] = name;
        return this;
    }
    public withPeriodType(periodType: number): SubscriptionTask {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withEmails(emails: string): SubscriptionTask {
        this['emails'] = emails;
        return this;
    }
    public withDomainName(domainName: string): SubscriptionTask {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withReportType(reportType: string): SubscriptionTask {
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
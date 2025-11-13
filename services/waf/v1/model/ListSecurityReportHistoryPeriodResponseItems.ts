import { ListSecurityReportHistoryPeriodResponseStatPeriod } from './ListSecurityReportHistoryPeriodResponseStatPeriod';


export class ListSecurityReportHistoryPeriodResponseItems {
    private 'report_id'?: string;
    private 'subscription_id'?: string;
    private 'stat_period'?: ListSecurityReportHistoryPeriodResponseStatPeriod;
    public constructor(reportId?: string, subscriptionId?: string, statPeriod?: ListSecurityReportHistoryPeriodResponseStatPeriod) { 
        this['report_id'] = reportId;
        this['subscription_id'] = subscriptionId;
        this['stat_period'] = statPeriod;
    }
    public withReportId(reportId: string): ListSecurityReportHistoryPeriodResponseItems {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withSubscriptionId(subscriptionId: string): ListSecurityReportHistoryPeriodResponseItems {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withStatPeriod(statPeriod: ListSecurityReportHistoryPeriodResponseStatPeriod): ListSecurityReportHistoryPeriodResponseItems {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: ListSecurityReportHistoryPeriodResponseStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): ListSecurityReportHistoryPeriodResponseStatPeriod | undefined {
        return this['stat_period'];
    }
}
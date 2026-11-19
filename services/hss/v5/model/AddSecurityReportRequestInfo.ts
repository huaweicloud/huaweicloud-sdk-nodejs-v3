import { IntrusionSubscriptionReq } from './IntrusionSubscriptionReq';
import { OverviewSubscriptionReq } from './OverviewSubscriptionReq';
import { ScansSubscriptionReq } from './ScansSubscriptionReq';
import { StatPeriodReq } from './StatPeriodReq';


export class AddSecurityReportRequestInfo {
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'subscription_type'?: string;
    private 'overview_subscriptions'?: OverviewSubscriptionReq;
    private 'scans_subscriptions'?: ScansSubscriptionReq;
    private 'intrusion_subscriptions'?: IntrusionSubscriptionReq;
    private 'stat_period'?: StatPeriodReq;
    private 'logo_type'?: string;
    private 'logo_id'?: string;
    public constructor(reportName?: string) { 
        this['report_name'] = reportName;
    }
    public withSendingPeriod(sendingPeriod: string): AddSecurityReportRequestInfo {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): AddSecurityReportRequestInfo {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): AddSecurityReportRequestInfo {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): AddSecurityReportRequestInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): AddSecurityReportRequestInfo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSubscriptionType(subscriptionType: string): AddSecurityReportRequestInfo {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withOverviewSubscriptions(overviewSubscriptions: OverviewSubscriptionReq): AddSecurityReportRequestInfo {
        this['overview_subscriptions'] = overviewSubscriptions;
        return this;
    }
    public set overviewSubscriptions(overviewSubscriptions: OverviewSubscriptionReq  | undefined) {
        this['overview_subscriptions'] = overviewSubscriptions;
    }
    public get overviewSubscriptions(): OverviewSubscriptionReq | undefined {
        return this['overview_subscriptions'];
    }
    public withScansSubscriptions(scansSubscriptions: ScansSubscriptionReq): AddSecurityReportRequestInfo {
        this['scans_subscriptions'] = scansSubscriptions;
        return this;
    }
    public set scansSubscriptions(scansSubscriptions: ScansSubscriptionReq  | undefined) {
        this['scans_subscriptions'] = scansSubscriptions;
    }
    public get scansSubscriptions(): ScansSubscriptionReq | undefined {
        return this['scans_subscriptions'];
    }
    public withIntrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionReq): AddSecurityReportRequestInfo {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
        return this;
    }
    public set intrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionReq  | undefined) {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
    }
    public get intrusionSubscriptions(): IntrusionSubscriptionReq | undefined {
        return this['intrusion_subscriptions'];
    }
    public withStatPeriod(statPeriod: StatPeriodReq): AddSecurityReportRequestInfo {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: StatPeriodReq  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): StatPeriodReq | undefined {
        return this['stat_period'];
    }
    public withLogoType(logoType: string): AddSecurityReportRequestInfo {
        this['logo_type'] = logoType;
        return this;
    }
    public set logoType(logoType: string  | undefined) {
        this['logo_type'] = logoType;
    }
    public get logoType(): string | undefined {
        return this['logo_type'];
    }
    public withLogoId(logoId: string): AddSecurityReportRequestInfo {
        this['logo_id'] = logoId;
        return this;
    }
    public set logoId(logoId: string  | undefined) {
        this['logo_id'] = logoId;
    }
    public get logoId(): string | undefined {
        return this['logo_id'];
    }
}
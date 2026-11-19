import { IntrusionSubscriptionReq } from './IntrusionSubscriptionReq';
import { OverviewSubscriptionReq } from './OverviewSubscriptionReq';
import { ScansSubscriptionReq } from './ScansSubscriptionReq';


export class ChangeSecurityReportRequestInfo {
    private 'report_id'?: number;
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'subscription_type'?: string;
    private 'overview_subscriptions'?: OverviewSubscriptionReq;
    private 'scans_subscriptions'?: ScansSubscriptionReq;
    private 'intrusion_subscriptions'?: IntrusionSubscriptionReq;
    private 'logo_type'?: string;
    private 'logo_id'?: string;
    public constructor(reportId?: number, reportName?: string) { 
        this['report_id'] = reportId;
        this['report_name'] = reportName;
    }
    public withReportId(reportId: number): ChangeSecurityReportRequestInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withSendingPeriod(sendingPeriod: string): ChangeSecurityReportRequestInfo {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): ChangeSecurityReportRequestInfo {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withTopicUrn(topicUrn: string): ChangeSecurityReportRequestInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ChangeSecurityReportRequestInfo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSubscriptionType(subscriptionType: string): ChangeSecurityReportRequestInfo {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withOverviewSubscriptions(overviewSubscriptions: OverviewSubscriptionReq): ChangeSecurityReportRequestInfo {
        this['overview_subscriptions'] = overviewSubscriptions;
        return this;
    }
    public set overviewSubscriptions(overviewSubscriptions: OverviewSubscriptionReq  | undefined) {
        this['overview_subscriptions'] = overviewSubscriptions;
    }
    public get overviewSubscriptions(): OverviewSubscriptionReq | undefined {
        return this['overview_subscriptions'];
    }
    public withScansSubscriptions(scansSubscriptions: ScansSubscriptionReq): ChangeSecurityReportRequestInfo {
        this['scans_subscriptions'] = scansSubscriptions;
        return this;
    }
    public set scansSubscriptions(scansSubscriptions: ScansSubscriptionReq  | undefined) {
        this['scans_subscriptions'] = scansSubscriptions;
    }
    public get scansSubscriptions(): ScansSubscriptionReq | undefined {
        return this['scans_subscriptions'];
    }
    public withIntrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionReq): ChangeSecurityReportRequestInfo {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
        return this;
    }
    public set intrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionReq  | undefined) {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
    }
    public get intrusionSubscriptions(): IntrusionSubscriptionReq | undefined {
        return this['intrusion_subscriptions'];
    }
    public withLogoType(logoType: string): ChangeSecurityReportRequestInfo {
        this['logo_type'] = logoType;
        return this;
    }
    public set logoType(logoType: string  | undefined) {
        this['logo_type'] = logoType;
    }
    public get logoType(): string | undefined {
        return this['logo_type'];
    }
    public withLogoId(logoId: string): ChangeSecurityReportRequestInfo {
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
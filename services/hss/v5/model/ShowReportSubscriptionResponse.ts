import { IntrusionSubscriptionRes } from './IntrusionSubscriptionRes';
import { OverviewSubscriptionRes } from './OverviewSubscriptionRes';
import { ScansSubscriptionRes } from './ScansSubscriptionRes';
import { StatPeriodRes } from './StatPeriodRes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportSubscriptionResponse extends SdkResponse {
    private 'report_id'?: number;
    private 'report_name'?: string;
    private 'sending_period'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'logo_type'?: string;
    private 'logo_id'?: string;
    private 'subscription_type'?: string;
    private 'overview_subscriptions'?: OverviewSubscriptionRes;
    private 'scans_subscriptions'?: ScansSubscriptionRes;
    private 'intrusion_subscriptions'?: IntrusionSubscriptionRes;
    private 'stat_period'?: StatPeriodRes;
    public constructor() { 
        super();
    }
    public withReportId(reportId: number): ShowReportSubscriptionResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportName(reportName: string): ShowReportSubscriptionResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withSendingPeriod(sendingPeriod: string): ShowReportSubscriptionResponse {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportCategory(reportCategory: string): ShowReportSubscriptionResponse {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): ShowReportSubscriptionResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ShowReportSubscriptionResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withLogoType(logoType: string): ShowReportSubscriptionResponse {
        this['logo_type'] = logoType;
        return this;
    }
    public set logoType(logoType: string  | undefined) {
        this['logo_type'] = logoType;
    }
    public get logoType(): string | undefined {
        return this['logo_type'];
    }
    public withLogoId(logoId: string): ShowReportSubscriptionResponse {
        this['logo_id'] = logoId;
        return this;
    }
    public set logoId(logoId: string  | undefined) {
        this['logo_id'] = logoId;
    }
    public get logoId(): string | undefined {
        return this['logo_id'];
    }
    public withSubscriptionType(subscriptionType: string): ShowReportSubscriptionResponse {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withOverviewSubscriptions(overviewSubscriptions: OverviewSubscriptionRes): ShowReportSubscriptionResponse {
        this['overview_subscriptions'] = overviewSubscriptions;
        return this;
    }
    public set overviewSubscriptions(overviewSubscriptions: OverviewSubscriptionRes  | undefined) {
        this['overview_subscriptions'] = overviewSubscriptions;
    }
    public get overviewSubscriptions(): OverviewSubscriptionRes | undefined {
        return this['overview_subscriptions'];
    }
    public withScansSubscriptions(scansSubscriptions: ScansSubscriptionRes): ShowReportSubscriptionResponse {
        this['scans_subscriptions'] = scansSubscriptions;
        return this;
    }
    public set scansSubscriptions(scansSubscriptions: ScansSubscriptionRes  | undefined) {
        this['scans_subscriptions'] = scansSubscriptions;
    }
    public get scansSubscriptions(): ScansSubscriptionRes | undefined {
        return this['scans_subscriptions'];
    }
    public withIntrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionRes): ShowReportSubscriptionResponse {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
        return this;
    }
    public set intrusionSubscriptions(intrusionSubscriptions: IntrusionSubscriptionRes  | undefined) {
        this['intrusion_subscriptions'] = intrusionSubscriptions;
    }
    public get intrusionSubscriptions(): IntrusionSubscriptionRes | undefined {
        return this['intrusion_subscriptions'];
    }
    public withStatPeriod(statPeriod: StatPeriodRes): ShowReportSubscriptionResponse {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: StatPeriodRes  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): StatPeriodRes | undefined {
        return this['stat_period'];
    }
}
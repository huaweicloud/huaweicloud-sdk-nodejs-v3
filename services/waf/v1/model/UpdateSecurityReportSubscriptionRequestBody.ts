import { UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription } from './UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription';
import { UpdateSecurityReportSubscriptionRequestBodyStatPeriod } from './UpdateSecurityReportSubscriptionRequestBodyStatPeriod';


export class UpdateSecurityReportSubscriptionRequestBody {
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'subscription_type'?: string;
    private 'report_content_subscription'?: UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription;
    private 'stat_period'?: UpdateSecurityReportSubscriptionRequestBodyStatPeriod;
    private 'report_status'?: string;
    public constructor(sendingPeriod?: string, reportName?: string, reportCategory?: string, subscriptionType?: string, reportContentSubscription?: UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription) { 
        this['sending_period'] = sendingPeriod;
        this['report_name'] = reportName;
        this['report_category'] = reportCategory;
        this['subscription_type'] = subscriptionType;
        this['report_content_subscription'] = reportContentSubscription;
    }
    public withSendingPeriod(sendingPeriod: string): UpdateSecurityReportSubscriptionRequestBody {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): UpdateSecurityReportSubscriptionRequestBody {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): UpdateSecurityReportSubscriptionRequestBody {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): UpdateSecurityReportSubscriptionRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): UpdateSecurityReportSubscriptionRequestBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSubscriptionType(subscriptionType: string): UpdateSecurityReportSubscriptionRequestBody {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withReportContentSubscription(reportContentSubscription: UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription): UpdateSecurityReportSubscriptionRequestBody {
        this['report_content_subscription'] = reportContentSubscription;
        return this;
    }
    public set reportContentSubscription(reportContentSubscription: UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription  | undefined) {
        this['report_content_subscription'] = reportContentSubscription;
    }
    public get reportContentSubscription(): UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription | undefined {
        return this['report_content_subscription'];
    }
    public withStatPeriod(statPeriod: UpdateSecurityReportSubscriptionRequestBodyStatPeriod): UpdateSecurityReportSubscriptionRequestBody {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: UpdateSecurityReportSubscriptionRequestBodyStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): UpdateSecurityReportSubscriptionRequestBodyStatPeriod | undefined {
        return this['stat_period'];
    }
    public withReportStatus(reportStatus: string): UpdateSecurityReportSubscriptionRequestBody {
        this['report_status'] = reportStatus;
        return this;
    }
    public set reportStatus(reportStatus: string  | undefined) {
        this['report_status'] = reportStatus;
    }
    public get reportStatus(): string | undefined {
        return this['report_status'];
    }
}
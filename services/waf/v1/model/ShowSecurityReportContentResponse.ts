import { SecurityReportContentResponseReportContentSubscriptionInfo } from './SecurityReportContentResponseReportContentSubscriptionInfo';
import { SecurityReportContentResponseStatPeriod } from './SecurityReportContentResponseStatPeriod';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityReportContentResponse extends SdkResponse {
    private 'report_id'?: string;
    private 'subscription_id'?: string;
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'subscription_type'?: string;
    private 'report_content_subscription_info'?: SecurityReportContentResponseReportContentSubscriptionInfo;
    private 'stat_period'?: SecurityReportContentResponseStatPeriod;
    public constructor() { 
        super();
    }
    public withReportId(reportId: string): ShowSecurityReportContentResponse {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withSubscriptionId(subscriptionId: string): ShowSecurityReportContentResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withSendingPeriod(sendingPeriod: string): ShowSecurityReportContentResponse {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): ShowSecurityReportContentResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): ShowSecurityReportContentResponse {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): ShowSecurityReportContentResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: string): ShowSecurityReportContentResponse {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withReportContentSubscriptionInfo(reportContentSubscriptionInfo: SecurityReportContentResponseReportContentSubscriptionInfo): ShowSecurityReportContentResponse {
        this['report_content_subscription_info'] = reportContentSubscriptionInfo;
        return this;
    }
    public set reportContentSubscriptionInfo(reportContentSubscriptionInfo: SecurityReportContentResponseReportContentSubscriptionInfo  | undefined) {
        this['report_content_subscription_info'] = reportContentSubscriptionInfo;
    }
    public get reportContentSubscriptionInfo(): SecurityReportContentResponseReportContentSubscriptionInfo | undefined {
        return this['report_content_subscription_info'];
    }
    public withStatPeriod(statPeriod: SecurityReportContentResponseStatPeriod): ShowSecurityReportContentResponse {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: SecurityReportContentResponseStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): SecurityReportContentResponseStatPeriod | undefined {
        return this['stat_period'];
    }
}
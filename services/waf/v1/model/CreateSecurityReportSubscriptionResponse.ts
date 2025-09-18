import { SecurityReportSubscriptionResponseReportContentSubscription } from './SecurityReportSubscriptionResponseReportContentSubscription';
import { SecurityReportSubscriptionResponseStatPeriod } from './SecurityReportSubscriptionResponseStatPeriod';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityReportSubscriptionResponse extends SdkResponse {
    private 'subscription_id'?: string;
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'subscription_type'?: string;
    private 'report_content_subscription'?: SecurityReportSubscriptionResponseReportContentSubscription;
    private 'stat_period'?: SecurityReportSubscriptionResponseStatPeriod;
    private 'is_all_enterprise_project'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor() { 
        super();
    }
    public withSubscriptionId(subscriptionId: string): CreateSecurityReportSubscriptionResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withSendingPeriod(sendingPeriod: string): CreateSecurityReportSubscriptionResponse {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): CreateSecurityReportSubscriptionResponse {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): CreateSecurityReportSubscriptionResponse {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): CreateSecurityReportSubscriptionResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: string): CreateSecurityReportSubscriptionResponse {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withReportContentSubscription(reportContentSubscription: SecurityReportSubscriptionResponseReportContentSubscription): CreateSecurityReportSubscriptionResponse {
        this['report_content_subscription'] = reportContentSubscription;
        return this;
    }
    public set reportContentSubscription(reportContentSubscription: SecurityReportSubscriptionResponseReportContentSubscription  | undefined) {
        this['report_content_subscription'] = reportContentSubscription;
    }
    public get reportContentSubscription(): SecurityReportSubscriptionResponseReportContentSubscription | undefined {
        return this['report_content_subscription'];
    }
    public withStatPeriod(statPeriod: SecurityReportSubscriptionResponseStatPeriod): CreateSecurityReportSubscriptionResponse {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: SecurityReportSubscriptionResponseStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): SecurityReportSubscriptionResponseStatPeriod | undefined {
        return this['stat_period'];
    }
    public withIsAllEnterpriseProject(isAllEnterpriseProject: boolean): CreateSecurityReportSubscriptionResponse {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
        return this;
    }
    public set isAllEnterpriseProject(isAllEnterpriseProject: boolean  | undefined) {
        this['is_all_enterprise_project'] = isAllEnterpriseProject;
    }
    public get isAllEnterpriseProject(): boolean | undefined {
        return this['is_all_enterprise_project'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecurityReportSubscriptionResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}
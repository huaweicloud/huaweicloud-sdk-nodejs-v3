import { CreateSecurityReportSubscriptionRequestBodyReportContentSubscription } from './CreateSecurityReportSubscriptionRequestBodyReportContentSubscription';
import { CreateSecurityReportSubscriptionRequestBodyStatPeriod } from './CreateSecurityReportSubscriptionRequestBodyStatPeriod';


export class CreateSecurityReportSubscriptionRequestBody {
    private 'sending_period'?: string;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'topic_urn'?: string;
    private 'subscription_type'?: string;
    private 'report_content_subscription'?: CreateSecurityReportSubscriptionRequestBodyReportContentSubscription;
    private 'stat_period'?: CreateSecurityReportSubscriptionRequestBodyStatPeriod;
    private 'console_url_prefix'?: string;
    public constructor() { 
    }
    public withSendingPeriod(sendingPeriod: string): CreateSecurityReportSubscriptionRequestBody {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
    public withReportName(reportName: string): CreateSecurityReportSubscriptionRequestBody {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): CreateSecurityReportSubscriptionRequestBody {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withTopicUrn(topicUrn: string): CreateSecurityReportSubscriptionRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: string): CreateSecurityReportSubscriptionRequestBody {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withReportContentSubscription(reportContentSubscription: CreateSecurityReportSubscriptionRequestBodyReportContentSubscription): CreateSecurityReportSubscriptionRequestBody {
        this['report_content_subscription'] = reportContentSubscription;
        return this;
    }
    public set reportContentSubscription(reportContentSubscription: CreateSecurityReportSubscriptionRequestBodyReportContentSubscription  | undefined) {
        this['report_content_subscription'] = reportContentSubscription;
    }
    public get reportContentSubscription(): CreateSecurityReportSubscriptionRequestBodyReportContentSubscription | undefined {
        return this['report_content_subscription'];
    }
    public withStatPeriod(statPeriod: CreateSecurityReportSubscriptionRequestBodyStatPeriod): CreateSecurityReportSubscriptionRequestBody {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: CreateSecurityReportSubscriptionRequestBodyStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): CreateSecurityReportSubscriptionRequestBodyStatPeriod | undefined {
        return this['stat_period'];
    }
    public withConsoleUrlPrefix(consoleUrlPrefix: string): CreateSecurityReportSubscriptionRequestBody {
        this['console_url_prefix'] = consoleUrlPrefix;
        return this;
    }
    public set consoleUrlPrefix(consoleUrlPrefix: string  | undefined) {
        this['console_url_prefix'] = consoleUrlPrefix;
    }
    public get consoleUrlPrefix(): string | undefined {
        return this['console_url_prefix'];
    }
}
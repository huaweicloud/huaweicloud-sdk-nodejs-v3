import { StatisticPeriod } from './StatisticPeriod';


export class ReportProfileInfoVO {
    public category?: string;
    public description?: string;
    public name?: string;
    private 'send_period'?: number;
    private 'send_week_day'?: number;
    private 'statistic_period'?: StatisticPeriod;
    public status?: number;
    private 'topic_name'?: string;
    private 'topic_urn'?: string;
    private 'subscription_type'?: number;
    public constructor() { 
    }
    public withCategory(category: string): ReportProfileInfoVO {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ReportProfileInfoVO {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ReportProfileInfoVO {
        this['name'] = name;
        return this;
    }
    public withSendPeriod(sendPeriod: number): ReportProfileInfoVO {
        this['send_period'] = sendPeriod;
        return this;
    }
    public set sendPeriod(sendPeriod: number  | undefined) {
        this['send_period'] = sendPeriod;
    }
    public get sendPeriod(): number | undefined {
        return this['send_period'];
    }
    public withSendWeekDay(sendWeekDay: number): ReportProfileInfoVO {
        this['send_week_day'] = sendWeekDay;
        return this;
    }
    public set sendWeekDay(sendWeekDay: number  | undefined) {
        this['send_week_day'] = sendWeekDay;
    }
    public get sendWeekDay(): number | undefined {
        return this['send_week_day'];
    }
    public withStatisticPeriod(statisticPeriod: StatisticPeriod): ReportProfileInfoVO {
        this['statistic_period'] = statisticPeriod;
        return this;
    }
    public set statisticPeriod(statisticPeriod: StatisticPeriod  | undefined) {
        this['statistic_period'] = statisticPeriod;
    }
    public get statisticPeriod(): StatisticPeriod | undefined {
        return this['statistic_period'];
    }
    public withStatus(status: number): ReportProfileInfoVO {
        this['status'] = status;
        return this;
    }
    public withTopicName(topicName: string): ReportProfileInfoVO {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withTopicUrn(topicUrn: string): ReportProfileInfoVO {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: number): ReportProfileInfoVO {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: number  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): number | undefined {
        return this['subscription_type'];
    }
}
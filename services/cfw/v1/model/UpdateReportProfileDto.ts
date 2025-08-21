import { StatisticPeriod } from './StatisticPeriod';


export class UpdateReportProfileDto {
    public description?: string;
    public name?: string;
    private 'send_period'?: number;
    private 'send_week_day'?: number;
    private 'statistic_period'?: StatisticPeriod;
    public status?: UpdateReportProfileDtoStatusEnum | number;
    private 'topic_urn'?: string;
    private 'subscription_type'?: UpdateReportProfileDtoSubscriptionTypeEnum | number;
    public constructor() { 
    }
    public withDescription(description: string): UpdateReportProfileDto {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateReportProfileDto {
        this['name'] = name;
        return this;
    }
    public withSendPeriod(sendPeriod: number): UpdateReportProfileDto {
        this['send_period'] = sendPeriod;
        return this;
    }
    public set sendPeriod(sendPeriod: number  | undefined) {
        this['send_period'] = sendPeriod;
    }
    public get sendPeriod(): number | undefined {
        return this['send_period'];
    }
    public withSendWeekDay(sendWeekDay: number): UpdateReportProfileDto {
        this['send_week_day'] = sendWeekDay;
        return this;
    }
    public set sendWeekDay(sendWeekDay: number  | undefined) {
        this['send_week_day'] = sendWeekDay;
    }
    public get sendWeekDay(): number | undefined {
        return this['send_week_day'];
    }
    public withStatisticPeriod(statisticPeriod: StatisticPeriod): UpdateReportProfileDto {
        this['statistic_period'] = statisticPeriod;
        return this;
    }
    public set statisticPeriod(statisticPeriod: StatisticPeriod  | undefined) {
        this['statistic_period'] = statisticPeriod;
    }
    public get statisticPeriod(): StatisticPeriod | undefined {
        return this['statistic_period'];
    }
    public withStatus(status: UpdateReportProfileDtoStatusEnum | number): UpdateReportProfileDto {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): UpdateReportProfileDto {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: UpdateReportProfileDtoSubscriptionTypeEnum | number): UpdateReportProfileDto {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: UpdateReportProfileDtoSubscriptionTypeEnum | number  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): UpdateReportProfileDtoSubscriptionTypeEnum | number | undefined {
        return this['subscription_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateReportProfileDtoStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateReportProfileDtoSubscriptionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

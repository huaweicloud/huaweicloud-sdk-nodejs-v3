import { StatisticPeriod } from './StatisticPeriod';


export class CreateReportProfileDto {
    public category?: CreateReportProfileDtoCategoryEnum | string;
    public description?: string;
    public name?: string;
    private 'send_period'?: number;
    private 'send_week_day'?: number;
    private 'statistic_period'?: StatisticPeriod;
    public status?: CreateReportProfileDtoStatusEnum | number;
    private 'topic_urn'?: string;
    private 'subscription_type'?: CreateReportProfileDtoSubscriptionTypeEnum | number;
    public constructor(category?: string, name?: string, topicUrn?: string) { 
        this['category'] = category;
        this['name'] = name;
        this['topic_urn'] = topicUrn;
    }
    public withCategory(category: CreateReportProfileDtoCategoryEnum | string): CreateReportProfileDto {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): CreateReportProfileDto {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateReportProfileDto {
        this['name'] = name;
        return this;
    }
    public withSendPeriod(sendPeriod: number): CreateReportProfileDto {
        this['send_period'] = sendPeriod;
        return this;
    }
    public set sendPeriod(sendPeriod: number  | undefined) {
        this['send_period'] = sendPeriod;
    }
    public get sendPeriod(): number | undefined {
        return this['send_period'];
    }
    public withSendWeekDay(sendWeekDay: number): CreateReportProfileDto {
        this['send_week_day'] = sendWeekDay;
        return this;
    }
    public set sendWeekDay(sendWeekDay: number  | undefined) {
        this['send_week_day'] = sendWeekDay;
    }
    public get sendWeekDay(): number | undefined {
        return this['send_week_day'];
    }
    public withStatisticPeriod(statisticPeriod: StatisticPeriod): CreateReportProfileDto {
        this['statistic_period'] = statisticPeriod;
        return this;
    }
    public set statisticPeriod(statisticPeriod: StatisticPeriod  | undefined) {
        this['statistic_period'] = statisticPeriod;
    }
    public get statisticPeriod(): StatisticPeriod | undefined {
        return this['statistic_period'];
    }
    public withStatus(status: CreateReportProfileDtoStatusEnum | number): CreateReportProfileDto {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): CreateReportProfileDto {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withSubscriptionType(subscriptionType: CreateReportProfileDtoSubscriptionTypeEnum | number): CreateReportProfileDto {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: CreateReportProfileDtoSubscriptionTypeEnum | number  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): CreateReportProfileDtoSubscriptionTypeEnum | number | undefined {
        return this['subscription_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateReportProfileDtoCategoryEnum {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    CUSTOM = 'custom'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateReportProfileDtoStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CreateReportProfileDtoSubscriptionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

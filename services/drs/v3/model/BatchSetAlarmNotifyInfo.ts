import { SubscriptionInfo } from './SubscriptionInfo';


export class BatchSetAlarmNotifyInfo {
    public subscriptions?: Array<SubscriptionInfo>;
    private 'topic_urn'?: string;
    private 'delay_time'?: number;
    private 'rto_delay'?: number;
    private 'rpo_delay'?: number;
    private 'alarm_to_user'?: boolean;
    public constructor() { 
    }
    public withSubscriptions(subscriptions: Array<SubscriptionInfo>): BatchSetAlarmNotifyInfo {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withTopicUrn(topicUrn: string): BatchSetAlarmNotifyInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDelayTime(delayTime: number): BatchSetAlarmNotifyInfo {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withRtoDelay(rtoDelay: number): BatchSetAlarmNotifyInfo {
        this['rto_delay'] = rtoDelay;
        return this;
    }
    public set rtoDelay(rtoDelay: number  | undefined) {
        this['rto_delay'] = rtoDelay;
    }
    public get rtoDelay(): number | undefined {
        return this['rto_delay'];
    }
    public withRpoDelay(rpoDelay: number): BatchSetAlarmNotifyInfo {
        this['rpo_delay'] = rpoDelay;
        return this;
    }
    public set rpoDelay(rpoDelay: number  | undefined) {
        this['rpo_delay'] = rpoDelay;
    }
    public get rpoDelay(): number | undefined {
        return this['rpo_delay'];
    }
    public withAlarmToUser(alarmToUser: boolean): BatchSetAlarmNotifyInfo {
        this['alarm_to_user'] = alarmToUser;
        return this;
    }
    public set alarmToUser(alarmToUser: boolean  | undefined) {
        this['alarm_to_user'] = alarmToUser;
    }
    public get alarmToUser(): boolean | undefined {
        return this['alarm_to_user'];
    }
}
import { SubscriptionInfo } from './SubscriptionInfo';


export class QuerySmnInfoResp {
    public subscriptions?: Array<SubscriptionInfo>;
    private 'topic_name'?: string | undefined;
    private 'delay_time'?: number | undefined;
    private 'rto_delay'?: number | undefined;
    private 'rpo_delay'?: number | undefined;
    private 'alarm_to_user'?: boolean | undefined;
    public constructor() { 
    }
    public withSubscriptions(subscriptions: Array<SubscriptionInfo>): QuerySmnInfoResp {
        this['subscriptions'] = subscriptions;
        return this;
    }
    public withTopicName(topicName: string): QuerySmnInfoResp {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName() {
        return this['topic_name'];
    }
    public withDelayTime(delayTime: number): QuerySmnInfoResp {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime() {
        return this['delay_time'];
    }
    public withRtoDelay(rtoDelay: number): QuerySmnInfoResp {
        this['rto_delay'] = rtoDelay;
        return this;
    }
    public set rtoDelay(rtoDelay: number | undefined) {
        this['rto_delay'] = rtoDelay;
    }
    public get rtoDelay() {
        return this['rto_delay'];
    }
    public withRpoDelay(rpoDelay: number): QuerySmnInfoResp {
        this['rpo_delay'] = rpoDelay;
        return this;
    }
    public set rpoDelay(rpoDelay: number | undefined) {
        this['rpo_delay'] = rpoDelay;
    }
    public get rpoDelay() {
        return this['rpo_delay'];
    }
    public withAlarmToUser(alarmToUser: boolean): QuerySmnInfoResp {
        this['alarm_to_user'] = alarmToUser;
        return this;
    }
    public set alarmToUser(alarmToUser: boolean | undefined) {
        this['alarm_to_user'] = alarmToUser;
    }
    public get alarmToUser() {
        return this['alarm_to_user'];
    }
}
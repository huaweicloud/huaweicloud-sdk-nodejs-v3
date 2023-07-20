import { SubscriptionInfo } from './SubscriptionInfo';


export class AlarmNotifyInfo {
    private 'delay_time'?: number;
    private 'rto_delay'?: number;
    private 'rpo_delay'?: number;
    private 'alarm_to_user'?: boolean;
    public subscriptions?: Array<SubscriptionInfo>;
    public constructor() { 
    }
    public withDelayTime(delayTime: number): AlarmNotifyInfo {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withRtoDelay(rtoDelay: number): AlarmNotifyInfo {
        this['rto_delay'] = rtoDelay;
        return this;
    }
    public set rtoDelay(rtoDelay: number  | undefined) {
        this['rto_delay'] = rtoDelay;
    }
    public get rtoDelay(): number | undefined {
        return this['rto_delay'];
    }
    public withRpoDelay(rpoDelay: number): AlarmNotifyInfo {
        this['rpo_delay'] = rpoDelay;
        return this;
    }
    public set rpoDelay(rpoDelay: number  | undefined) {
        this['rpo_delay'] = rpoDelay;
    }
    public get rpoDelay(): number | undefined {
        return this['rpo_delay'];
    }
    public withAlarmToUser(alarmToUser: boolean): AlarmNotifyInfo {
        this['alarm_to_user'] = alarmToUser;
        return this;
    }
    public set alarmToUser(alarmToUser: boolean  | undefined) {
        this['alarm_to_user'] = alarmToUser;
    }
    public get alarmToUser(): boolean | undefined {
        return this['alarm_to_user'];
    }
    public withSubscriptions(subscriptions: Array<SubscriptionInfo>): AlarmNotifyInfo {
        this['subscriptions'] = subscriptions;
        return this;
    }
}
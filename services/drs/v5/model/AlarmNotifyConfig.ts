

export class AlarmNotifyConfig {
    private 'alarm_to_user': boolean | undefined;
    private 'topic_urn'?: string | undefined;
    private 'delay_time'?: number | undefined;
    private 'rpo_delay'?: number | undefined;
    private 'rto_delay'?: number | undefined;
    public constructor(alarmToUser?: any) { 
        this['alarm_to_user'] = alarmToUser;
    }
    public withAlarmToUser(alarmToUser: boolean): AlarmNotifyConfig {
        this['alarm_to_user'] = alarmToUser;
        return this;
    }
    public set alarmToUser(alarmToUser: boolean | undefined) {
        this['alarm_to_user'] = alarmToUser;
    }
    public get alarmToUser() {
        return this['alarm_to_user'];
    }
    public withTopicUrn(topicUrn: string): AlarmNotifyConfig {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withDelayTime(delayTime: number): AlarmNotifyConfig {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime() {
        return this['delay_time'];
    }
    public withRpoDelay(rpoDelay: number): AlarmNotifyConfig {
        this['rpo_delay'] = rpoDelay;
        return this;
    }
    public set rpoDelay(rpoDelay: number | undefined) {
        this['rpo_delay'] = rpoDelay;
    }
    public get rpoDelay() {
        return this['rpo_delay'];
    }
    public withRtoDelay(rtoDelay: number): AlarmNotifyConfig {
        this['rto_delay'] = rtoDelay;
        return this;
    }
    public set rtoDelay(rtoDelay: number | undefined) {
        this['rto_delay'] = rtoDelay;
    }
    public get rtoDelay() {
        return this['rto_delay'];
    }
}
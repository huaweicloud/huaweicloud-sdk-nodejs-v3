

export class AssociateSmnTopicReqV5 {
    private 'topic_urn'?: string;
    private 'increment_delay_threshold'?: number;
    private 'rto_delay_threshold'?: number;
    private 'rpo_delay_threshold'?: number;
    private 'is_alarm_to_user'?: boolean;
    public constructor(topicUrn?: string, isAlarmToUser?: boolean) { 
        this['topic_urn'] = topicUrn;
        this['is_alarm_to_user'] = isAlarmToUser;
    }
    public withTopicUrn(topicUrn: string): AssociateSmnTopicReqV5 {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withIncrementDelayThreshold(incrementDelayThreshold: number): AssociateSmnTopicReqV5 {
        this['increment_delay_threshold'] = incrementDelayThreshold;
        return this;
    }
    public set incrementDelayThreshold(incrementDelayThreshold: number  | undefined) {
        this['increment_delay_threshold'] = incrementDelayThreshold;
    }
    public get incrementDelayThreshold(): number | undefined {
        return this['increment_delay_threshold'];
    }
    public withRtoDelayThreshold(rtoDelayThreshold: number): AssociateSmnTopicReqV5 {
        this['rto_delay_threshold'] = rtoDelayThreshold;
        return this;
    }
    public set rtoDelayThreshold(rtoDelayThreshold: number  | undefined) {
        this['rto_delay_threshold'] = rtoDelayThreshold;
    }
    public get rtoDelayThreshold(): number | undefined {
        return this['rto_delay_threshold'];
    }
    public withRpoDelayThreshold(rpoDelayThreshold: number): AssociateSmnTopicReqV5 {
        this['rpo_delay_threshold'] = rpoDelayThreshold;
        return this;
    }
    public set rpoDelayThreshold(rpoDelayThreshold: number  | undefined) {
        this['rpo_delay_threshold'] = rpoDelayThreshold;
    }
    public get rpoDelayThreshold(): number | undefined {
        return this['rpo_delay_threshold'];
    }
    public withIsAlarmToUser(isAlarmToUser: boolean): AssociateSmnTopicReqV5 {
        this['is_alarm_to_user'] = isAlarmToUser;
        return this;
    }
    public set isAlarmToUser(isAlarmToUser: boolean  | undefined) {
        this['is_alarm_to_user'] = isAlarmToUser;
    }
    public get isAlarmToUser(): boolean | undefined {
        return this['is_alarm_to_user'];
    }
}


export class UpdateAttackLogAlarmConfigDto {
    private 'account_name'?: string;
    private 'alarm_id'?: string;
    private 'alarm_time_period'?: number;
    private 'alarm_type'?: number;
    private 'enable_status'?: number;
    private 'frequency_count'?: number;
    private 'frequency_time'?: number;
    public language?: string;
    public severity?: string;
    private 'topic_urn'?: string;
    public username?: string;
    public constructor() { 
    }
    public withAccountName(accountName: string): UpdateAttackLogAlarmConfigDto {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAlarmId(alarmId: string): UpdateAttackLogAlarmConfigDto {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withAlarmTimePeriod(alarmTimePeriod: number): UpdateAttackLogAlarmConfigDto {
        this['alarm_time_period'] = alarmTimePeriod;
        return this;
    }
    public set alarmTimePeriod(alarmTimePeriod: number  | undefined) {
        this['alarm_time_period'] = alarmTimePeriod;
    }
    public get alarmTimePeriod(): number | undefined {
        return this['alarm_time_period'];
    }
    public withAlarmType(alarmType: number): UpdateAttackLogAlarmConfigDto {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: number  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): number | undefined {
        return this['alarm_type'];
    }
    public withEnableStatus(enableStatus: number): UpdateAttackLogAlarmConfigDto {
        this['enable_status'] = enableStatus;
        return this;
    }
    public set enableStatus(enableStatus: number  | undefined) {
        this['enable_status'] = enableStatus;
    }
    public get enableStatus(): number | undefined {
        return this['enable_status'];
    }
    public withFrequencyCount(frequencyCount: number): UpdateAttackLogAlarmConfigDto {
        this['frequency_count'] = frequencyCount;
        return this;
    }
    public set frequencyCount(frequencyCount: number  | undefined) {
        this['frequency_count'] = frequencyCount;
    }
    public get frequencyCount(): number | undefined {
        return this['frequency_count'];
    }
    public withFrequencyTime(frequencyTime: number): UpdateAttackLogAlarmConfigDto {
        this['frequency_time'] = frequencyTime;
        return this;
    }
    public set frequencyTime(frequencyTime: number  | undefined) {
        this['frequency_time'] = frequencyTime;
    }
    public get frequencyTime(): number | undefined {
        return this['frequency_time'];
    }
    public withLanguage(language: string): UpdateAttackLogAlarmConfigDto {
        this['language'] = language;
        return this;
    }
    public withSeverity(severity: string): UpdateAttackLogAlarmConfigDto {
        this['severity'] = severity;
        return this;
    }
    public withTopicUrn(topicUrn: string): UpdateAttackLogAlarmConfigDto {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withUsername(username: string): UpdateAttackLogAlarmConfigDto {
        this['username'] = username;
        return this;
    }
}


export class ConfigAlarmTopicRequest {
    private 'alarm_cpu'?: number;
    private 'alarm_disk'?: number;
    private 'alarm_memory'?: number;
    private 'alarm_num'?: number;
    private 'alarm_risk'?: Array<string>;
    private 'alarm_switch'?: string;
    private 'alarm_topic_urn'?: string;
    public constructor(alarmCpu?: number, alarmDisk?: number, alarmMemory?: number, alarmNum?: number, alarmSwitch?: string) { 
        this['alarm_cpu'] = alarmCpu;
        this['alarm_disk'] = alarmDisk;
        this['alarm_memory'] = alarmMemory;
        this['alarm_num'] = alarmNum;
        this['alarm_switch'] = alarmSwitch;
    }
    public withAlarmCpu(alarmCpu: number): ConfigAlarmTopicRequest {
        this['alarm_cpu'] = alarmCpu;
        return this;
    }
    public set alarmCpu(alarmCpu: number  | undefined) {
        this['alarm_cpu'] = alarmCpu;
    }
    public get alarmCpu(): number | undefined {
        return this['alarm_cpu'];
    }
    public withAlarmDisk(alarmDisk: number): ConfigAlarmTopicRequest {
        this['alarm_disk'] = alarmDisk;
        return this;
    }
    public set alarmDisk(alarmDisk: number  | undefined) {
        this['alarm_disk'] = alarmDisk;
    }
    public get alarmDisk(): number | undefined {
        return this['alarm_disk'];
    }
    public withAlarmMemory(alarmMemory: number): ConfigAlarmTopicRequest {
        this['alarm_memory'] = alarmMemory;
        return this;
    }
    public set alarmMemory(alarmMemory: number  | undefined) {
        this['alarm_memory'] = alarmMemory;
    }
    public get alarmMemory(): number | undefined {
        return this['alarm_memory'];
    }
    public withAlarmNum(alarmNum: number): ConfigAlarmTopicRequest {
        this['alarm_num'] = alarmNum;
        return this;
    }
    public set alarmNum(alarmNum: number  | undefined) {
        this['alarm_num'] = alarmNum;
    }
    public get alarmNum(): number | undefined {
        return this['alarm_num'];
    }
    public withAlarmRisk(alarmRisk: Array<string>): ConfigAlarmTopicRequest {
        this['alarm_risk'] = alarmRisk;
        return this;
    }
    public set alarmRisk(alarmRisk: Array<string>  | undefined) {
        this['alarm_risk'] = alarmRisk;
    }
    public get alarmRisk(): Array<string> | undefined {
        return this['alarm_risk'];
    }
    public withAlarmSwitch(alarmSwitch: string): ConfigAlarmTopicRequest {
        this['alarm_switch'] = alarmSwitch;
        return this;
    }
    public set alarmSwitch(alarmSwitch: string  | undefined) {
        this['alarm_switch'] = alarmSwitch;
    }
    public get alarmSwitch(): string | undefined {
        return this['alarm_switch'];
    }
    public withAlarmTopicUrn(alarmTopicUrn: string): ConfigAlarmTopicRequest {
        this['alarm_topic_urn'] = alarmTopicUrn;
        return this;
    }
    public set alarmTopicUrn(alarmTopicUrn: string  | undefined) {
        this['alarm_topic_urn'] = alarmTopicUrn;
    }
    public get alarmTopicUrn(): string | undefined {
        return this['alarm_topic_urn'];
    }
}
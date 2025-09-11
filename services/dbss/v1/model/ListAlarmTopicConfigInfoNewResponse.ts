
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmTopicConfigInfoNewResponse extends SdkResponse {
    private 'alarm_cpu'?: string;
    private 'alarm_disk'?: string;
    private 'alarm_memory'?: string;
    private 'alarm_num'?: string;
    private 'alarm_risk'?: Array<string>;
    private 'alarm_switch'?: string;
    private 'alarm_topic_urn'?: string;
    private 'smn_effective'?: boolean;
    public constructor() { 
        super();
    }
    public withAlarmCpu(alarmCpu: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_cpu'] = alarmCpu;
        return this;
    }
    public set alarmCpu(alarmCpu: string  | undefined) {
        this['alarm_cpu'] = alarmCpu;
    }
    public get alarmCpu(): string | undefined {
        return this['alarm_cpu'];
    }
    public withAlarmDisk(alarmDisk: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_disk'] = alarmDisk;
        return this;
    }
    public set alarmDisk(alarmDisk: string  | undefined) {
        this['alarm_disk'] = alarmDisk;
    }
    public get alarmDisk(): string | undefined {
        return this['alarm_disk'];
    }
    public withAlarmMemory(alarmMemory: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_memory'] = alarmMemory;
        return this;
    }
    public set alarmMemory(alarmMemory: string  | undefined) {
        this['alarm_memory'] = alarmMemory;
    }
    public get alarmMemory(): string | undefined {
        return this['alarm_memory'];
    }
    public withAlarmNum(alarmNum: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_num'] = alarmNum;
        return this;
    }
    public set alarmNum(alarmNum: string  | undefined) {
        this['alarm_num'] = alarmNum;
    }
    public get alarmNum(): string | undefined {
        return this['alarm_num'];
    }
    public withAlarmRisk(alarmRisk: Array<string>): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_risk'] = alarmRisk;
        return this;
    }
    public set alarmRisk(alarmRisk: Array<string>  | undefined) {
        this['alarm_risk'] = alarmRisk;
    }
    public get alarmRisk(): Array<string> | undefined {
        return this['alarm_risk'];
    }
    public withAlarmSwitch(alarmSwitch: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_switch'] = alarmSwitch;
        return this;
    }
    public set alarmSwitch(alarmSwitch: string  | undefined) {
        this['alarm_switch'] = alarmSwitch;
    }
    public get alarmSwitch(): string | undefined {
        return this['alarm_switch'];
    }
    public withAlarmTopicUrn(alarmTopicUrn: string): ListAlarmTopicConfigInfoNewResponse {
        this['alarm_topic_urn'] = alarmTopicUrn;
        return this;
    }
    public set alarmTopicUrn(alarmTopicUrn: string  | undefined) {
        this['alarm_topic_urn'] = alarmTopicUrn;
    }
    public get alarmTopicUrn(): string | undefined {
        return this['alarm_topic_urn'];
    }
    public withSmnEffective(smnEffective: boolean): ListAlarmTopicConfigInfoNewResponse {
        this['smn_effective'] = smnEffective;
        return this;
    }
    public set smnEffective(smnEffective: boolean  | undefined) {
        this['smn_effective'] = smnEffective;
    }
    public get smnEffective(): boolean | undefined {
        return this['smn_effective'];
    }
}
import { PeriodObject } from './PeriodObject';
import { SmnTopicRequest } from './SmnTopicRequest';


export class CreateBaselineRequest {
    private 'workspace_id'?: string;
    public name?: string;
    private 'owner_name'?: string;
    public type?: string;
    private 'sla_task_ids'?: Array<string>;
    public priority?: number;
    public buffer?: number;
    public enable?: boolean;
    private 'alarm_enable'?: boolean;
    private 'sign_enable'?: boolean;
    private 'sla_hour'?: string;
    private 'sla_min'?: string;
    private 'baseline_alarm_enable'?: boolean;
    private 'smn_topics'?: Array<SmnTopicRequest>;
    private 'event_smn_topics'?: Array<SmnTopicRequest>;
    private 'event_alarm'?: Array<string>;
    public period?: Array<PeriodObject>;
    public constructor(workspaceId?: string, name?: string, ownerName?: string, type?: string, slaTaskIds?: Array<string>, priority?: number, buffer?: number, enable?: boolean, alarmEnable?: boolean, signEnable?: boolean, slaHour?: string, slaMin?: string, baselineAlarmEnable?: boolean) { 
        this['workspace_id'] = workspaceId;
        this['name'] = name;
        this['owner_name'] = ownerName;
        this['type'] = type;
        this['sla_task_ids'] = slaTaskIds;
        this['priority'] = priority;
        this['buffer'] = buffer;
        this['enable'] = enable;
        this['alarm_enable'] = alarmEnable;
        this['sign_enable'] = signEnable;
        this['sla_hour'] = slaHour;
        this['sla_min'] = slaMin;
        this['baseline_alarm_enable'] = baselineAlarmEnable;
    }
    public withWorkspaceId(workspaceId: string): CreateBaselineRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withName(name: string): CreateBaselineRequest {
        this['name'] = name;
        return this;
    }
    public withOwnerName(ownerName: string): CreateBaselineRequest {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withType(type: string): CreateBaselineRequest {
        this['type'] = type;
        return this;
    }
    public withSlaTaskIds(slaTaskIds: Array<string>): CreateBaselineRequest {
        this['sla_task_ids'] = slaTaskIds;
        return this;
    }
    public set slaTaskIds(slaTaskIds: Array<string>  | undefined) {
        this['sla_task_ids'] = slaTaskIds;
    }
    public get slaTaskIds(): Array<string> | undefined {
        return this['sla_task_ids'];
    }
    public withPriority(priority: number): CreateBaselineRequest {
        this['priority'] = priority;
        return this;
    }
    public withBuffer(buffer: number): CreateBaselineRequest {
        this['buffer'] = buffer;
        return this;
    }
    public withEnable(enable: boolean): CreateBaselineRequest {
        this['enable'] = enable;
        return this;
    }
    public withAlarmEnable(alarmEnable: boolean): CreateBaselineRequest {
        this['alarm_enable'] = alarmEnable;
        return this;
    }
    public set alarmEnable(alarmEnable: boolean  | undefined) {
        this['alarm_enable'] = alarmEnable;
    }
    public get alarmEnable(): boolean | undefined {
        return this['alarm_enable'];
    }
    public withSignEnable(signEnable: boolean): CreateBaselineRequest {
        this['sign_enable'] = signEnable;
        return this;
    }
    public set signEnable(signEnable: boolean  | undefined) {
        this['sign_enable'] = signEnable;
    }
    public get signEnable(): boolean | undefined {
        return this['sign_enable'];
    }
    public withSlaHour(slaHour: string): CreateBaselineRequest {
        this['sla_hour'] = slaHour;
        return this;
    }
    public set slaHour(slaHour: string  | undefined) {
        this['sla_hour'] = slaHour;
    }
    public get slaHour(): string | undefined {
        return this['sla_hour'];
    }
    public withSlaMin(slaMin: string): CreateBaselineRequest {
        this['sla_min'] = slaMin;
        return this;
    }
    public set slaMin(slaMin: string  | undefined) {
        this['sla_min'] = slaMin;
    }
    public get slaMin(): string | undefined {
        return this['sla_min'];
    }
    public withBaselineAlarmEnable(baselineAlarmEnable: boolean): CreateBaselineRequest {
        this['baseline_alarm_enable'] = baselineAlarmEnable;
        return this;
    }
    public set baselineAlarmEnable(baselineAlarmEnable: boolean  | undefined) {
        this['baseline_alarm_enable'] = baselineAlarmEnable;
    }
    public get baselineAlarmEnable(): boolean | undefined {
        return this['baseline_alarm_enable'];
    }
    public withSmnTopics(smnTopics: Array<SmnTopicRequest>): CreateBaselineRequest {
        this['smn_topics'] = smnTopics;
        return this;
    }
    public set smnTopics(smnTopics: Array<SmnTopicRequest>  | undefined) {
        this['smn_topics'] = smnTopics;
    }
    public get smnTopics(): Array<SmnTopicRequest> | undefined {
        return this['smn_topics'];
    }
    public withEventSmnTopics(eventSmnTopics: Array<SmnTopicRequest>): CreateBaselineRequest {
        this['event_smn_topics'] = eventSmnTopics;
        return this;
    }
    public set eventSmnTopics(eventSmnTopics: Array<SmnTopicRequest>  | undefined) {
        this['event_smn_topics'] = eventSmnTopics;
    }
    public get eventSmnTopics(): Array<SmnTopicRequest> | undefined {
        return this['event_smn_topics'];
    }
    public withEventAlarm(eventAlarm: Array<string>): CreateBaselineRequest {
        this['event_alarm'] = eventAlarm;
        return this;
    }
    public set eventAlarm(eventAlarm: Array<string>  | undefined) {
        this['event_alarm'] = eventAlarm;
    }
    public get eventAlarm(): Array<string> | undefined {
        return this['event_alarm'];
    }
    public withPeriod(period: Array<PeriodObject>): CreateBaselineRequest {
        this['period'] = period;
        return this;
    }
}
import { PeriodSlaTimeV2 } from './PeriodSlaTimeV2';
import { SmnTopic } from './SmnTopic';


export class BaselineV2 {
    public id?: string;
    public name?: string;
    public version?: number;
    private 'create_time'?: number;
    private 'last_update_time'?: number;
    public type?: BaselineV2TypeEnum | string;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'workspace_id'?: string;
    private 'sla_task_ids'?: Array<string>;
    public priority?: number;
    private 'sla_min'?: number;
    public buffer?: number;
    private 'sla_hour'?: number;
    private 'exp_min'?: number;
    private 'exp_hour'?: number;
    private 'hour_exp_detail'?: string;
    private 'hour_sla_detail'?: string;
    public enable?: boolean;
    private 'alarm_enable'?: boolean;
    private 'baseline_alarm_enable'?: boolean;
    private 'smn_topics'?: Array<SmnTopic>;
    private 'event_alarm'?: Array<BaselineV2EventAlarmEnum> | Array<string>;
    private 'event_smn_topics'?: Array<SmnTopic>;
    private 'sign_enable'?: boolean;
    public period?: Array<PeriodSlaTimeV2>;
    public constructor() { 
    }
    public withId(id: string): BaselineV2 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BaselineV2 {
        this['name'] = name;
        return this;
    }
    public withVersion(version: number): BaselineV2 {
        this['version'] = version;
        return this;
    }
    public withCreateTime(createTime: number): BaselineV2 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): BaselineV2 {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withType(type: BaselineV2TypeEnum | string): BaselineV2 {
        this['type'] = type;
        return this;
    }
    public withOwnerId(ownerId: string): BaselineV2 {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): BaselineV2 {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withDomainId(domainId: string): BaselineV2 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): BaselineV2 {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withProjectId(projectId: string): BaselineV2 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): BaselineV2 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: string): BaselineV2 {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSlaTaskIds(slaTaskIds: Array<string>): BaselineV2 {
        this['sla_task_ids'] = slaTaskIds;
        return this;
    }
    public set slaTaskIds(slaTaskIds: Array<string>  | undefined) {
        this['sla_task_ids'] = slaTaskIds;
    }
    public get slaTaskIds(): Array<string> | undefined {
        return this['sla_task_ids'];
    }
    public withPriority(priority: number): BaselineV2 {
        this['priority'] = priority;
        return this;
    }
    public withSlaMin(slaMin: number): BaselineV2 {
        this['sla_min'] = slaMin;
        return this;
    }
    public set slaMin(slaMin: number  | undefined) {
        this['sla_min'] = slaMin;
    }
    public get slaMin(): number | undefined {
        return this['sla_min'];
    }
    public withBuffer(buffer: number): BaselineV2 {
        this['buffer'] = buffer;
        return this;
    }
    public withSlaHour(slaHour: number): BaselineV2 {
        this['sla_hour'] = slaHour;
        return this;
    }
    public set slaHour(slaHour: number  | undefined) {
        this['sla_hour'] = slaHour;
    }
    public get slaHour(): number | undefined {
        return this['sla_hour'];
    }
    public withExpMin(expMin: number): BaselineV2 {
        this['exp_min'] = expMin;
        return this;
    }
    public set expMin(expMin: number  | undefined) {
        this['exp_min'] = expMin;
    }
    public get expMin(): number | undefined {
        return this['exp_min'];
    }
    public withExpHour(expHour: number): BaselineV2 {
        this['exp_hour'] = expHour;
        return this;
    }
    public set expHour(expHour: number  | undefined) {
        this['exp_hour'] = expHour;
    }
    public get expHour(): number | undefined {
        return this['exp_hour'];
    }
    public withHourExpDetail(hourExpDetail: string): BaselineV2 {
        this['hour_exp_detail'] = hourExpDetail;
        return this;
    }
    public set hourExpDetail(hourExpDetail: string  | undefined) {
        this['hour_exp_detail'] = hourExpDetail;
    }
    public get hourExpDetail(): string | undefined {
        return this['hour_exp_detail'];
    }
    public withHourSlaDetail(hourSlaDetail: string): BaselineV2 {
        this['hour_sla_detail'] = hourSlaDetail;
        return this;
    }
    public set hourSlaDetail(hourSlaDetail: string  | undefined) {
        this['hour_sla_detail'] = hourSlaDetail;
    }
    public get hourSlaDetail(): string | undefined {
        return this['hour_sla_detail'];
    }
    public withEnable(enable: boolean): BaselineV2 {
        this['enable'] = enable;
        return this;
    }
    public withAlarmEnable(alarmEnable: boolean): BaselineV2 {
        this['alarm_enable'] = alarmEnable;
        return this;
    }
    public set alarmEnable(alarmEnable: boolean  | undefined) {
        this['alarm_enable'] = alarmEnable;
    }
    public get alarmEnable(): boolean | undefined {
        return this['alarm_enable'];
    }
    public withBaselineAlarmEnable(baselineAlarmEnable: boolean): BaselineV2 {
        this['baseline_alarm_enable'] = baselineAlarmEnable;
        return this;
    }
    public set baselineAlarmEnable(baselineAlarmEnable: boolean  | undefined) {
        this['baseline_alarm_enable'] = baselineAlarmEnable;
    }
    public get baselineAlarmEnable(): boolean | undefined {
        return this['baseline_alarm_enable'];
    }
    public withSmnTopics(smnTopics: Array<SmnTopic>): BaselineV2 {
        this['smn_topics'] = smnTopics;
        return this;
    }
    public set smnTopics(smnTopics: Array<SmnTopic>  | undefined) {
        this['smn_topics'] = smnTopics;
    }
    public get smnTopics(): Array<SmnTopic> | undefined {
        return this['smn_topics'];
    }
    public withEventAlarm(eventAlarm: Array<BaselineV2EventAlarmEnum> | Array<string>): BaselineV2 {
        this['event_alarm'] = eventAlarm;
        return this;
    }
    public set eventAlarm(eventAlarm: Array<BaselineV2EventAlarmEnum> | Array<string>  | undefined) {
        this['event_alarm'] = eventAlarm;
    }
    public get eventAlarm(): Array<BaselineV2EventAlarmEnum> | Array<string> | undefined {
        return this['event_alarm'];
    }
    public withEventSmnTopics(eventSmnTopics: Array<SmnTopic>): BaselineV2 {
        this['event_smn_topics'] = eventSmnTopics;
        return this;
    }
    public set eventSmnTopics(eventSmnTopics: Array<SmnTopic>  | undefined) {
        this['event_smn_topics'] = eventSmnTopics;
    }
    public get eventSmnTopics(): Array<SmnTopic> | undefined {
        return this['event_smn_topics'];
    }
    public withSignEnable(signEnable: boolean): BaselineV2 {
        this['sign_enable'] = signEnable;
        return this;
    }
    public set signEnable(signEnable: boolean  | undefined) {
        this['sign_enable'] = signEnable;
    }
    public get signEnable(): boolean | undefined {
        return this['sign_enable'];
    }
    public withPeriod(period: Array<PeriodSlaTimeV2>): BaselineV2 {
        this['period'] = period;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaselineV2TypeEnum {
    DAY = 'DAY',
    HOUR = 'HOUR'
}
/**
    * @export
    * @enum {string}
    */
export enum BaselineV2EventAlarmEnum {
    ERROR = 'ERROR',
    SLOW_DOWN = 'SLOW_DOWN'
}

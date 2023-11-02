import { ConsistencyRuleDetailForOpenApi } from './ConsistencyRuleDetailForOpenApi';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsistencyTaskDetailResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'category_id'?: number;
    public level?: string;
    private 'alarm_condition'?: string;
    private 'alarm_notify'?: boolean;
    private 'alarm_notify_type'?: string;
    private 'alarm_notify_topic'?: string;
    private 'schedule_type'?: string;
    private 'schedule_period'?: string;
    private 'schedule_interval'?: string;
    private 'schedule_start_time'?: string;
    private 'schedule_end_time'?: string;
    private 'create_time'?: number;
    private 'last_run_time'?: number;
    private 'sub_rules'?: Array<Array<ConsistencyRuleDetailForOpenApi>>;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowConsistencyTaskDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowConsistencyTaskDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowConsistencyTaskDetailResponse {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: number): ShowConsistencyTaskDetailResponse {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withLevel(level: string): ShowConsistencyTaskDetailResponse {
        this['level'] = level;
        return this;
    }
    public withAlarmCondition(alarmCondition: string): ShowConsistencyTaskDetailResponse {
        this['alarm_condition'] = alarmCondition;
        return this;
    }
    public set alarmCondition(alarmCondition: string  | undefined) {
        this['alarm_condition'] = alarmCondition;
    }
    public get alarmCondition(): string | undefined {
        return this['alarm_condition'];
    }
    public withAlarmNotify(alarmNotify: boolean): ShowConsistencyTaskDetailResponse {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: boolean  | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify(): boolean | undefined {
        return this['alarm_notify'];
    }
    public withAlarmNotifyType(alarmNotifyType: string): ShowConsistencyTaskDetailResponse {
        this['alarm_notify_type'] = alarmNotifyType;
        return this;
    }
    public set alarmNotifyType(alarmNotifyType: string  | undefined) {
        this['alarm_notify_type'] = alarmNotifyType;
    }
    public get alarmNotifyType(): string | undefined {
        return this['alarm_notify_type'];
    }
    public withAlarmNotifyTopic(alarmNotifyTopic: string): ShowConsistencyTaskDetailResponse {
        this['alarm_notify_topic'] = alarmNotifyTopic;
        return this;
    }
    public set alarmNotifyTopic(alarmNotifyTopic: string  | undefined) {
        this['alarm_notify_topic'] = alarmNotifyTopic;
    }
    public get alarmNotifyTopic(): string | undefined {
        return this['alarm_notify_topic'];
    }
    public withScheduleType(scheduleType: string): ShowConsistencyTaskDetailResponse {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withSchedulePeriod(schedulePeriod: string): ShowConsistencyTaskDetailResponse {
        this['schedule_period'] = schedulePeriod;
        return this;
    }
    public set schedulePeriod(schedulePeriod: string  | undefined) {
        this['schedule_period'] = schedulePeriod;
    }
    public get schedulePeriod(): string | undefined {
        return this['schedule_period'];
    }
    public withScheduleInterval(scheduleInterval: string): ShowConsistencyTaskDetailResponse {
        this['schedule_interval'] = scheduleInterval;
        return this;
    }
    public set scheduleInterval(scheduleInterval: string  | undefined) {
        this['schedule_interval'] = scheduleInterval;
    }
    public get scheduleInterval(): string | undefined {
        return this['schedule_interval'];
    }
    public withScheduleStartTime(scheduleStartTime: string): ShowConsistencyTaskDetailResponse {
        this['schedule_start_time'] = scheduleStartTime;
        return this;
    }
    public set scheduleStartTime(scheduleStartTime: string  | undefined) {
        this['schedule_start_time'] = scheduleStartTime;
    }
    public get scheduleStartTime(): string | undefined {
        return this['schedule_start_time'];
    }
    public withScheduleEndTime(scheduleEndTime: string): ShowConsistencyTaskDetailResponse {
        this['schedule_end_time'] = scheduleEndTime;
        return this;
    }
    public set scheduleEndTime(scheduleEndTime: string  | undefined) {
        this['schedule_end_time'] = scheduleEndTime;
    }
    public get scheduleEndTime(): string | undefined {
        return this['schedule_end_time'];
    }
    public withCreateTime(createTime: number): ShowConsistencyTaskDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastRunTime(lastRunTime: number): ShowConsistencyTaskDetailResponse {
        this['last_run_time'] = lastRunTime;
        return this;
    }
    public set lastRunTime(lastRunTime: number  | undefined) {
        this['last_run_time'] = lastRunTime;
    }
    public get lastRunTime(): number | undefined {
        return this['last_run_time'];
    }
    public withSubRules(subRules: Array<Array<ConsistencyRuleDetailForOpenApi>>): ShowConsistencyTaskDetailResponse {
        this['sub_rules'] = subRules;
        return this;
    }
    public set subRules(subRules: Array<Array<ConsistencyRuleDetailForOpenApi>>  | undefined) {
        this['sub_rules'] = subRules;
    }
    public get subRules(): Array<Array<ConsistencyRuleDetailForOpenApi>> | undefined {
        return this['sub_rules'];
    }
}
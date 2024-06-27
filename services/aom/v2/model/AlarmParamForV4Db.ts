import { AlarmNotification } from './AlarmNotification';
import { EventAlarmSpec } from './EventAlarmSpec';
import { MetricAlarmSpec } from './MetricAlarmSpec';


export class AlarmParamForV4Db {
    private 'alarm_create_time'?: number;
    private 'alarm_update_time'?: number;
    private 'alarm_rule_name'?: string;
    private 'alarm_rule_id'?: number;
    private 'enterprise_project_id'?: string;
    private 'prom_instance_id'?: string;
    private 'alarm_rule_description'?: string;
    private 'alarm_rule_enable'?: boolean;
    private 'alarm_rule_status'?: string;
    private 'alarm_rule_type'?: AlarmParamForV4DbAlarmRuleTypeEnum | string;
    private 'metric_alarm_spec'?: MetricAlarmSpec;
    private 'event_alarm_spec'?: EventAlarmSpec;
    private 'alarm_notifications'?: AlarmNotification;
    private 'user_id'?: string;
    public constructor(alarmCreateTime?: number, alarmUpdateTime?: number, alarmRuleName?: string, alarmRuleId?: number, enterpriseProjectId?: string, alarmRuleDescription?: string, alarmRuleEnable?: boolean, alarmRuleStatus?: string, alarmRuleType?: string, alarmNotifications?: AlarmNotification) { 
        this['alarm_create_time'] = alarmCreateTime;
        this['alarm_update_time'] = alarmUpdateTime;
        this['alarm_rule_name'] = alarmRuleName;
        this['alarm_rule_id'] = alarmRuleId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['alarm_rule_description'] = alarmRuleDescription;
        this['alarm_rule_enable'] = alarmRuleEnable;
        this['alarm_rule_status'] = alarmRuleStatus;
        this['alarm_rule_type'] = alarmRuleType;
        this['alarm_notifications'] = alarmNotifications;
    }
    public withAlarmCreateTime(alarmCreateTime: number): AlarmParamForV4Db {
        this['alarm_create_time'] = alarmCreateTime;
        return this;
    }
    public set alarmCreateTime(alarmCreateTime: number  | undefined) {
        this['alarm_create_time'] = alarmCreateTime;
    }
    public get alarmCreateTime(): number | undefined {
        return this['alarm_create_time'];
    }
    public withAlarmUpdateTime(alarmUpdateTime: number): AlarmParamForV4Db {
        this['alarm_update_time'] = alarmUpdateTime;
        return this;
    }
    public set alarmUpdateTime(alarmUpdateTime: number  | undefined) {
        this['alarm_update_time'] = alarmUpdateTime;
    }
    public get alarmUpdateTime(): number | undefined {
        return this['alarm_update_time'];
    }
    public withAlarmRuleName(alarmRuleName: string): AlarmParamForV4Db {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withAlarmRuleId(alarmRuleId: number): AlarmParamForV4Db {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AlarmParamForV4Db {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPromInstanceId(promInstanceId: string): AlarmParamForV4Db {
        this['prom_instance_id'] = promInstanceId;
        return this;
    }
    public set promInstanceId(promInstanceId: string  | undefined) {
        this['prom_instance_id'] = promInstanceId;
    }
    public get promInstanceId(): string | undefined {
        return this['prom_instance_id'];
    }
    public withAlarmRuleDescription(alarmRuleDescription: string): AlarmParamForV4Db {
        this['alarm_rule_description'] = alarmRuleDescription;
        return this;
    }
    public set alarmRuleDescription(alarmRuleDescription: string  | undefined) {
        this['alarm_rule_description'] = alarmRuleDescription;
    }
    public get alarmRuleDescription(): string | undefined {
        return this['alarm_rule_description'];
    }
    public withAlarmRuleEnable(alarmRuleEnable: boolean): AlarmParamForV4Db {
        this['alarm_rule_enable'] = alarmRuleEnable;
        return this;
    }
    public set alarmRuleEnable(alarmRuleEnable: boolean  | undefined) {
        this['alarm_rule_enable'] = alarmRuleEnable;
    }
    public get alarmRuleEnable(): boolean | undefined {
        return this['alarm_rule_enable'];
    }
    public withAlarmRuleStatus(alarmRuleStatus: string): AlarmParamForV4Db {
        this['alarm_rule_status'] = alarmRuleStatus;
        return this;
    }
    public set alarmRuleStatus(alarmRuleStatus: string  | undefined) {
        this['alarm_rule_status'] = alarmRuleStatus;
    }
    public get alarmRuleStatus(): string | undefined {
        return this['alarm_rule_status'];
    }
    public withAlarmRuleType(alarmRuleType: AlarmParamForV4DbAlarmRuleTypeEnum | string): AlarmParamForV4Db {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: AlarmParamForV4DbAlarmRuleTypeEnum | string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): AlarmParamForV4DbAlarmRuleTypeEnum | string | undefined {
        return this['alarm_rule_type'];
    }
    public withMetricAlarmSpec(metricAlarmSpec: MetricAlarmSpec): AlarmParamForV4Db {
        this['metric_alarm_spec'] = metricAlarmSpec;
        return this;
    }
    public set metricAlarmSpec(metricAlarmSpec: MetricAlarmSpec  | undefined) {
        this['metric_alarm_spec'] = metricAlarmSpec;
    }
    public get metricAlarmSpec(): MetricAlarmSpec | undefined {
        return this['metric_alarm_spec'];
    }
    public withEventAlarmSpec(eventAlarmSpec: EventAlarmSpec): AlarmParamForV4Db {
        this['event_alarm_spec'] = eventAlarmSpec;
        return this;
    }
    public set eventAlarmSpec(eventAlarmSpec: EventAlarmSpec  | undefined) {
        this['event_alarm_spec'] = eventAlarmSpec;
    }
    public get eventAlarmSpec(): EventAlarmSpec | undefined {
        return this['event_alarm_spec'];
    }
    public withAlarmNotifications(alarmNotifications: AlarmNotification): AlarmParamForV4Db {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: AlarmNotification  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): AlarmNotification | undefined {
        return this['alarm_notifications'];
    }
    public withUserId(userId: string): AlarmParamForV4Db {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmParamForV4DbAlarmRuleTypeEnum {
    METRIC = 'metric',
    EVENT = 'event'
}

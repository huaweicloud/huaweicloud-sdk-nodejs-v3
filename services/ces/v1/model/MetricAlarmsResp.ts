import { AlarmRuleConditionResp } from './AlarmRuleConditionResp';
import { ListAlarmMetricResp } from './ListAlarmMetricResp';
import { NotificationResp } from './NotificationResp';


export class MetricAlarmsResp {
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    private 'relation_id'?: string;
    public metric?: ListAlarmMetricResp;
    public condition?: AlarmRuleConditionResp;
    private 'alarm_enabled'?: boolean;
    private 'alarm_level'?: number;
    private 'alarm_type'?: string;
    private 'alarm_action_enabled'?: boolean;
    private 'ignore_insufficient_data'?: boolean;
    private 'alarm_actions'?: Array<NotificationResp>;
    private 'ok_actions'?: Array<NotificationResp>;
    private 'insufficientdata_actions'?: Array<NotificationResp>;
    private 'alarm_action_begin_time'?: string;
    private 'alarm_action_end_time'?: string;
    private 'effective_timezone'?: string;
    private 'alarm_id'?: string;
    private 'update_time'?: number;
    private 'alarm_state'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withAlarmName(alarmName: string): MetricAlarmsResp {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): MetricAlarmsResp {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withRelationId(relationId: string): MetricAlarmsResp {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: string  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): string | undefined {
        return this['relation_id'];
    }
    public withMetric(metric: ListAlarmMetricResp): MetricAlarmsResp {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: AlarmRuleConditionResp): MetricAlarmsResp {
        this['condition'] = condition;
        return this;
    }
    public withAlarmEnabled(alarmEnabled: boolean): MetricAlarmsResp {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withAlarmLevel(alarmLevel: number): MetricAlarmsResp {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: string): MetricAlarmsResp {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): MetricAlarmsResp {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withIgnoreInsufficientData(ignoreInsufficientData: boolean): MetricAlarmsResp {
        this['ignore_insufficient_data'] = ignoreInsufficientData;
        return this;
    }
    public set ignoreInsufficientData(ignoreInsufficientData: boolean  | undefined) {
        this['ignore_insufficient_data'] = ignoreInsufficientData;
    }
    public get ignoreInsufficientData(): boolean | undefined {
        return this['ignore_insufficient_data'];
    }
    public withAlarmActions(alarmActions: Array<NotificationResp>): MetricAlarmsResp {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<NotificationResp>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<NotificationResp> | undefined {
        return this['alarm_actions'];
    }
    public withOkActions(okActions: Array<NotificationResp>): MetricAlarmsResp {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<NotificationResp>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<NotificationResp> | undefined {
        return this['ok_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<NotificationResp>): MetricAlarmsResp {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<NotificationResp>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<NotificationResp> | undefined {
        return this['insufficientdata_actions'];
    }
    public withAlarmActionBeginTime(alarmActionBeginTime: string): MetricAlarmsResp {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
        return this;
    }
    public set alarmActionBeginTime(alarmActionBeginTime: string  | undefined) {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
    }
    public get alarmActionBeginTime(): string | undefined {
        return this['alarm_action_begin_time'];
    }
    public withAlarmActionEndTime(alarmActionEndTime: string): MetricAlarmsResp {
        this['alarm_action_end_time'] = alarmActionEndTime;
        return this;
    }
    public set alarmActionEndTime(alarmActionEndTime: string  | undefined) {
        this['alarm_action_end_time'] = alarmActionEndTime;
    }
    public get alarmActionEndTime(): string | undefined {
        return this['alarm_action_end_time'];
    }
    public withEffectiveTimezone(effectiveTimezone: string): MetricAlarmsResp {
        this['effective_timezone'] = effectiveTimezone;
        return this;
    }
    public set effectiveTimezone(effectiveTimezone: string  | undefined) {
        this['effective_timezone'] = effectiveTimezone;
    }
    public get effectiveTimezone(): string | undefined {
        return this['effective_timezone'];
    }
    public withAlarmId(alarmId: string): MetricAlarmsResp {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withUpdateTime(updateTime: number): MetricAlarmsResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withAlarmState(alarmState: string): MetricAlarmsResp {
        this['alarm_state'] = alarmState;
        return this;
    }
    public set alarmState(alarmState: string  | undefined) {
        this['alarm_state'] = alarmState;
    }
    public get alarmState(): string | undefined {
        return this['alarm_state'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MetricAlarmsResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}
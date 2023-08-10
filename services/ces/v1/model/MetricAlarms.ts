import { AlarmActions } from './AlarmActions';
import { Condition } from './Condition';
import { MetricInfoForAlarm } from './MetricInfoForAlarm';


export class MetricAlarms {
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public metric?: MetricInfoForAlarm;
    public condition?: Condition;
    private 'alarm_enabled'?: boolean;
    private 'alarm_level'?: number;
    private 'alarm_type'?: MetricAlarmsAlarmTypeEnum | string;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_actions'?: Array<AlarmActions>;
    private 'ok_actions'?: Array<AlarmActions>;
    private 'insufficientdata_actions'?: Array<AlarmActions>;
    private 'alarm_action_begin_time'?: string;
    private 'alarm_action_end_time'?: string;
    private 'alarm_id'?: string;
    private 'update_time'?: number;
    private 'alarm_state'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(alarmName?: string, metric?: MetricInfoForAlarm, condition?: Condition, alarmId?: string, updateTime?: number, alarmState?: string) { 
        this['alarm_name'] = alarmName;
        this['metric'] = metric;
        this['condition'] = condition;
        this['alarm_id'] = alarmId;
        this['update_time'] = updateTime;
        this['alarm_state'] = alarmState;
    }
    public withAlarmName(alarmName: string): MetricAlarms {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): MetricAlarms {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withMetric(metric: MetricInfoForAlarm): MetricAlarms {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: Condition): MetricAlarms {
        this['condition'] = condition;
        return this;
    }
    public withAlarmEnabled(alarmEnabled: boolean): MetricAlarms {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withAlarmLevel(alarmLevel: number): MetricAlarms {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: MetricAlarmsAlarmTypeEnum | string): MetricAlarms {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: MetricAlarmsAlarmTypeEnum | string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): MetricAlarmsAlarmTypeEnum | string | undefined {
        return this['alarm_type'];
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): MetricAlarms {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<AlarmActions>): MetricAlarms {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<AlarmActions>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<AlarmActions> | undefined {
        return this['alarm_actions'];
    }
    public withOkActions(okActions: Array<AlarmActions>): MetricAlarms {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<AlarmActions>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<AlarmActions> | undefined {
        return this['ok_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<AlarmActions>): MetricAlarms {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<AlarmActions>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<AlarmActions> | undefined {
        return this['insufficientdata_actions'];
    }
    public withAlarmActionBeginTime(alarmActionBeginTime: string): MetricAlarms {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
        return this;
    }
    public set alarmActionBeginTime(alarmActionBeginTime: string  | undefined) {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
    }
    public get alarmActionBeginTime(): string | undefined {
        return this['alarm_action_begin_time'];
    }
    public withAlarmActionEndTime(alarmActionEndTime: string): MetricAlarms {
        this['alarm_action_end_time'] = alarmActionEndTime;
        return this;
    }
    public set alarmActionEndTime(alarmActionEndTime: string  | undefined) {
        this['alarm_action_end_time'] = alarmActionEndTime;
    }
    public get alarmActionEndTime(): string | undefined {
        return this['alarm_action_end_time'];
    }
    public withAlarmId(alarmId: string): MetricAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withUpdateTime(updateTime: number): MetricAlarms {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withAlarmState(alarmState: string): MetricAlarms {
        this['alarm_state'] = alarmState;
        return this;
    }
    public set alarmState(alarmState: string  | undefined) {
        this['alarm_state'] = alarmState;
    }
    public get alarmState(): string | undefined {
        return this['alarm_state'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MetricAlarms {
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

/**
    * @export
    * @enum {string}
    */
export enum MetricAlarmsAlarmTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM'
}

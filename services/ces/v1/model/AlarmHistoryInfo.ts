import { AdditionalInfo } from './AdditionalInfo';
import { AlarmActions } from './AlarmActions';
import { Condition } from './Condition';
import { DataPointForAlarmHistory } from './DataPointForAlarmHistory';
import { MetricInfo } from './MetricInfo';


export class AlarmHistoryInfo {
    private 'alarm_id'?: string;
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public metric?: MetricInfo;
    public condition?: Condition;
    private 'alarm_level'?: number;
    private 'alarm_type'?: string;
    private 'alarm_enabled'?: boolean;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_actions'?: Array<AlarmActions>;
    private 'ok_actions'?: Array<AlarmActions>;
    private 'insufficientdata_actions'?: Array<AlarmActions>;
    private 'update_time'?: number;
    private 'enterprise_project_id'?: string;
    private 'trigger_time'?: number;
    private 'alarm_status'?: string;
    public datapoints?: Array<DataPointForAlarmHistory>;
    private 'additional_info'?: AdditionalInfo;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): AlarmHistoryInfo {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): AlarmHistoryInfo {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): AlarmHistoryInfo {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withMetric(metric: MetricInfo): AlarmHistoryInfo {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: Condition): AlarmHistoryInfo {
        this['condition'] = condition;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): AlarmHistoryInfo {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: string): AlarmHistoryInfo {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withAlarmEnabled(alarmEnabled: boolean): AlarmHistoryInfo {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): AlarmHistoryInfo {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<AlarmActions>): AlarmHistoryInfo {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<AlarmActions>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<AlarmActions> | undefined {
        return this['alarm_actions'];
    }
    public withOkActions(okActions: Array<AlarmActions>): AlarmHistoryInfo {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<AlarmActions>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<AlarmActions> | undefined {
        return this['ok_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<AlarmActions>): AlarmHistoryInfo {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<AlarmActions>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<AlarmActions> | undefined {
        return this['insufficientdata_actions'];
    }
    public withUpdateTime(updateTime: number): AlarmHistoryInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AlarmHistoryInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTriggerTime(triggerTime: number): AlarmHistoryInfo {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: number  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): number | undefined {
        return this['trigger_time'];
    }
    public withAlarmStatus(alarmStatus: string): AlarmHistoryInfo {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): string | undefined {
        return this['alarm_status'];
    }
    public withDatapoints(datapoints: Array<DataPointForAlarmHistory>): AlarmHistoryInfo {
        this['datapoints'] = datapoints;
        return this;
    }
    public withAdditionalInfo(additionalInfo: AdditionalInfo): AlarmHistoryInfo {
        this['additional_info'] = additionalInfo;
        return this;
    }
    public set additionalInfo(additionalInfo: AdditionalInfo  | undefined) {
        this['additional_info'] = additionalInfo;
    }
    public get additionalInfo(): AdditionalInfo | undefined {
        return this['additional_info'];
    }
}
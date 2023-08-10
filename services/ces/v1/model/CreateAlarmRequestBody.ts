import { AlarmActions } from './AlarmActions';
import { Condition } from './Condition';
import { MetricForAlarm } from './MetricForAlarm';


export class CreateAlarmRequestBody {
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public metric?: MetricForAlarm;
    public condition?: Condition;
    private 'alarm_enabled'?: boolean;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_level'?: number;
    private 'alarm_type'?: CreateAlarmRequestBodyAlarmTypeEnum | string;
    private 'alarm_actions'?: Array<AlarmActions>;
    private 'insufficientdata_actions'?: Array<AlarmActions>;
    private 'ok_actions'?: Array<AlarmActions>;
    private 'enterprise_project_id'?: string;
    public constructor(alarmName?: string, metric?: MetricForAlarm, condition?: Condition) { 
        this['alarm_name'] = alarmName;
        this['metric'] = metric;
        this['condition'] = condition;
    }
    public withAlarmName(alarmName: string): CreateAlarmRequestBody {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): CreateAlarmRequestBody {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withMetric(metric: MetricForAlarm): CreateAlarmRequestBody {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: Condition): CreateAlarmRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withAlarmEnabled(alarmEnabled: boolean): CreateAlarmRequestBody {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): CreateAlarmRequestBody {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withAlarmLevel(alarmLevel: number): CreateAlarmRequestBody {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: CreateAlarmRequestBodyAlarmTypeEnum | string): CreateAlarmRequestBody {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: CreateAlarmRequestBodyAlarmTypeEnum | string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): CreateAlarmRequestBodyAlarmTypeEnum | string | undefined {
        return this['alarm_type'];
    }
    public withAlarmActions(alarmActions: Array<AlarmActions>): CreateAlarmRequestBody {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<AlarmActions>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<AlarmActions> | undefined {
        return this['alarm_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<AlarmActions>): CreateAlarmRequestBody {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<AlarmActions>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<AlarmActions> | undefined {
        return this['insufficientdata_actions'];
    }
    public withOkActions(okActions: Array<AlarmActions>): CreateAlarmRequestBody {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<AlarmActions>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<AlarmActions> | undefined {
        return this['ok_actions'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAlarmRequestBody {
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
export enum CreateAlarmRequestBodyAlarmTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM',
    RESOURCE_GROUP = 'RESOURCE_GROUP'
}

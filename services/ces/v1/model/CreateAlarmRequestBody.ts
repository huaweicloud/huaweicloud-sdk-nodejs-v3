import { Condition } from './Condition';
import { CreateAlarmMetric } from './CreateAlarmMetric';
import { Notification } from './Notification';


export class CreateAlarmRequestBody {
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public metric?: CreateAlarmMetric;
    public condition?: Condition;
    private 'alarm_enabled'?: boolean;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_level'?: number;
    private 'alarm_type'?: string;
    private 'alarm_actions'?: Array<Notification>;
    private 'insufficientdata_actions'?: Array<Notification>;
    private 'ok_actions'?: Array<Notification>;
    private 'enterprise_project_id'?: string;
    private 'alarm_action_begin_time'?: string;
    private 'alarm_action_end_time'?: string;
    public constructor(alarmName?: string, metric?: CreateAlarmMetric, condition?: Condition) { 
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
    public withMetric(metric: CreateAlarmMetric): CreateAlarmRequestBody {
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
    public withAlarmType(alarmType: string): CreateAlarmRequestBody {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withAlarmActions(alarmActions: Array<Notification>): CreateAlarmRequestBody {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<Notification>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<Notification> | undefined {
        return this['alarm_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<Notification>): CreateAlarmRequestBody {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<Notification>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<Notification> | undefined {
        return this['insufficientdata_actions'];
    }
    public withOkActions(okActions: Array<Notification>): CreateAlarmRequestBody {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<Notification>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<Notification> | undefined {
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
    public withAlarmActionBeginTime(alarmActionBeginTime: string): CreateAlarmRequestBody {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
        return this;
    }
    public set alarmActionBeginTime(alarmActionBeginTime: string  | undefined) {
        this['alarm_action_begin_time'] = alarmActionBeginTime;
    }
    public get alarmActionBeginTime(): string | undefined {
        return this['alarm_action_begin_time'];
    }
    public withAlarmActionEndTime(alarmActionEndTime: string): CreateAlarmRequestBody {
        this['alarm_action_end_time'] = alarmActionEndTime;
        return this;
    }
    public set alarmActionEndTime(alarmActionEndTime: string  | undefined) {
        this['alarm_action_end_time'] = alarmActionEndTime;
    }
    public get alarmActionEndTime(): string | undefined {
        return this['alarm_action_end_time'];
    }
}
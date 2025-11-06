import { AdditionalInfoResp } from './AdditionalInfoResp';
import { ConditionResp } from './ConditionResp';
import { DataPointForAlarmHistoryResp } from './DataPointForAlarmHistoryResp';
import { MetricInfoResp } from './MetricInfoResp';
import { NotificationResp } from './NotificationResp';


export class AlarmHistoryInfoResp {
    private 'alarm_id'?: string;
    private 'alarm_name'?: string;
    private 'alarm_description'?: string;
    public metric?: MetricInfoResp;
    public condition?: ConditionResp;
    private 'alarm_level'?: number;
    private 'alarm_type'?: string;
    private 'alarm_enabled'?: boolean;
    private 'alarm_action_enabled'?: boolean;
    private 'alarm_actions'?: Array<Array<NotificationResp>>;
    private 'ok_actions'?: Array<Array<NotificationResp>>;
    private 'insufficientdata_actions'?: Array<Array<NotificationResp>>;
    private 'update_time'?: number;
    private 'enterprise_project_id'?: string;
    private 'trigger_time'?: number;
    private 'alarm_status'?: string;
    public datapoints?: Array<DataPointForAlarmHistoryResp>;
    private 'additional_info'?: AdditionalInfoResp;
    private 'notification_manner'?: AlarmHistoryInfoRespNotificationMannerEnum | string;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): AlarmHistoryInfoResp {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): AlarmHistoryInfoResp {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmDescription(alarmDescription: string): AlarmHistoryInfoResp {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
    public withMetric(metric: MetricInfoResp): AlarmHistoryInfoResp {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: ConditionResp): AlarmHistoryInfoResp {
        this['condition'] = condition;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): AlarmHistoryInfoResp {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withAlarmType(alarmType: string): AlarmHistoryInfoResp {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withAlarmEnabled(alarmEnabled: boolean): AlarmHistoryInfoResp {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: boolean  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): boolean | undefined {
        return this['alarm_enabled'];
    }
    public withAlarmActionEnabled(alarmActionEnabled: boolean): AlarmHistoryInfoResp {
        this['alarm_action_enabled'] = alarmActionEnabled;
        return this;
    }
    public set alarmActionEnabled(alarmActionEnabled: boolean  | undefined) {
        this['alarm_action_enabled'] = alarmActionEnabled;
    }
    public get alarmActionEnabled(): boolean | undefined {
        return this['alarm_action_enabled'];
    }
    public withAlarmActions(alarmActions: Array<Array<NotificationResp>>): AlarmHistoryInfoResp {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<Array<NotificationResp>>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<Array<NotificationResp>> | undefined {
        return this['alarm_actions'];
    }
    public withOkActions(okActions: Array<Array<NotificationResp>>): AlarmHistoryInfoResp {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<Array<NotificationResp>>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<Array<NotificationResp>> | undefined {
        return this['ok_actions'];
    }
    public withInsufficientdataActions(insufficientdataActions: Array<Array<NotificationResp>>): AlarmHistoryInfoResp {
        this['insufficientdata_actions'] = insufficientdataActions;
        return this;
    }
    public set insufficientdataActions(insufficientdataActions: Array<Array<NotificationResp>>  | undefined) {
        this['insufficientdata_actions'] = insufficientdataActions;
    }
    public get insufficientdataActions(): Array<Array<NotificationResp>> | undefined {
        return this['insufficientdata_actions'];
    }
    public withUpdateTime(updateTime: number): AlarmHistoryInfoResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AlarmHistoryInfoResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTriggerTime(triggerTime: number): AlarmHistoryInfoResp {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: number  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): number | undefined {
        return this['trigger_time'];
    }
    public withAlarmStatus(alarmStatus: string): AlarmHistoryInfoResp {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): string | undefined {
        return this['alarm_status'];
    }
    public withDatapoints(datapoints: Array<DataPointForAlarmHistoryResp>): AlarmHistoryInfoResp {
        this['datapoints'] = datapoints;
        return this;
    }
    public withAdditionalInfo(additionalInfo: AdditionalInfoResp): AlarmHistoryInfoResp {
        this['additional_info'] = additionalInfo;
        return this;
    }
    public set additionalInfo(additionalInfo: AdditionalInfoResp  | undefined) {
        this['additional_info'] = additionalInfo;
    }
    public get additionalInfo(): AdditionalInfoResp | undefined {
        return this['additional_info'];
    }
    public withNotificationManner(notificationManner: AlarmHistoryInfoRespNotificationMannerEnum | string): AlarmHistoryInfoResp {
        this['notification_manner'] = notificationManner;
        return this;
    }
    public set notificationManner(notificationManner: AlarmHistoryInfoRespNotificationMannerEnum | string  | undefined) {
        this['notification_manner'] = notificationManner;
    }
    public get notificationManner(): AlarmHistoryInfoRespNotificationMannerEnum | string | undefined {
        return this['notification_manner'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmHistoryInfoRespNotificationMannerEnum {
    NOTIFICATION_POLICY = 'NOTIFICATION_POLICY',
    NOTIFICATION_GROUP = 'NOTIFICATION_GROUP',
    TOPIC_SUBSCRIPTION = 'TOPIC_SUBSCRIPTION'
}

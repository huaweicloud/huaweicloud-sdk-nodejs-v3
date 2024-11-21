import { AdditionalInfo } from './AdditionalInfo';
import { AlarmCondition } from './AlarmCondition';
import { AlarmType } from './AlarmType';
import { DataPointInfo } from './DataPointInfo';
import { Metric } from './Metric';
import { Notification } from './Notification';


export class AlarmHistoryItemV2 {
    private 'record_id'?: string;
    private 'alarm_id'?: string;
    public name?: string;
    public status?: AlarmHistoryItemV2StatusEnum | string;
    public level?: AlarmHistoryItemV2LevelEnum | number;
    public type?: AlarmType;
    private 'action_enabled'?: boolean;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'first_alarm_time'?: Date;
    private 'last_alarm_time'?: Date;
    private 'alarm_recovery_time'?: Date;
    public metric?: Metric;
    public condition?: AlarmCondition;
    private 'additional_info'?: AdditionalInfo;
    private 'alarm_actions'?: Array<Notification>;
    private 'ok_actions'?: Array<Notification>;
    private 'data_points'?: Array<DataPointInfo>;
    public constructor() { 
    }
    public withRecordId(recordId: string): AlarmHistoryItemV2 {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withAlarmId(alarmId: string): AlarmHistoryItemV2 {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): AlarmHistoryItemV2 {
        this['name'] = name;
        return this;
    }
    public withStatus(status: AlarmHistoryItemV2StatusEnum | string): AlarmHistoryItemV2 {
        this['status'] = status;
        return this;
    }
    public withLevel(level: AlarmHistoryItemV2LevelEnum | number): AlarmHistoryItemV2 {
        this['level'] = level;
        return this;
    }
    public withType(type: AlarmType): AlarmHistoryItemV2 {
        this['type'] = type;
        return this;
    }
    public withActionEnabled(actionEnabled: boolean): AlarmHistoryItemV2 {
        this['action_enabled'] = actionEnabled;
        return this;
    }
    public set actionEnabled(actionEnabled: boolean  | undefined) {
        this['action_enabled'] = actionEnabled;
    }
    public get actionEnabled(): boolean | undefined {
        return this['action_enabled'];
    }
    public withBeginTime(beginTime: Date): AlarmHistoryItemV2 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): AlarmHistoryItemV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withFirstAlarmTime(firstAlarmTime: Date): AlarmHistoryItemV2 {
        this['first_alarm_time'] = firstAlarmTime;
        return this;
    }
    public set firstAlarmTime(firstAlarmTime: Date  | undefined) {
        this['first_alarm_time'] = firstAlarmTime;
    }
    public get firstAlarmTime(): Date | undefined {
        return this['first_alarm_time'];
    }
    public withLastAlarmTime(lastAlarmTime: Date): AlarmHistoryItemV2 {
        this['last_alarm_time'] = lastAlarmTime;
        return this;
    }
    public set lastAlarmTime(lastAlarmTime: Date  | undefined) {
        this['last_alarm_time'] = lastAlarmTime;
    }
    public get lastAlarmTime(): Date | undefined {
        return this['last_alarm_time'];
    }
    public withAlarmRecoveryTime(alarmRecoveryTime: Date): AlarmHistoryItemV2 {
        this['alarm_recovery_time'] = alarmRecoveryTime;
        return this;
    }
    public set alarmRecoveryTime(alarmRecoveryTime: Date  | undefined) {
        this['alarm_recovery_time'] = alarmRecoveryTime;
    }
    public get alarmRecoveryTime(): Date | undefined {
        return this['alarm_recovery_time'];
    }
    public withMetric(metric: Metric): AlarmHistoryItemV2 {
        this['metric'] = metric;
        return this;
    }
    public withCondition(condition: AlarmCondition): AlarmHistoryItemV2 {
        this['condition'] = condition;
        return this;
    }
    public withAdditionalInfo(additionalInfo: AdditionalInfo): AlarmHistoryItemV2 {
        this['additional_info'] = additionalInfo;
        return this;
    }
    public set additionalInfo(additionalInfo: AdditionalInfo  | undefined) {
        this['additional_info'] = additionalInfo;
    }
    public get additionalInfo(): AdditionalInfo | undefined {
        return this['additional_info'];
    }
    public withAlarmActions(alarmActions: Array<Notification>): AlarmHistoryItemV2 {
        this['alarm_actions'] = alarmActions;
        return this;
    }
    public set alarmActions(alarmActions: Array<Notification>  | undefined) {
        this['alarm_actions'] = alarmActions;
    }
    public get alarmActions(): Array<Notification> | undefined {
        return this['alarm_actions'];
    }
    public withOkActions(okActions: Array<Notification>): AlarmHistoryItemV2 {
        this['ok_actions'] = okActions;
        return this;
    }
    public set okActions(okActions: Array<Notification>  | undefined) {
        this['ok_actions'] = okActions;
    }
    public get okActions(): Array<Notification> | undefined {
        return this['ok_actions'];
    }
    public withDataPoints(dataPoints: Array<DataPointInfo>): AlarmHistoryItemV2 {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<DataPointInfo>  | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints(): Array<DataPointInfo> | undefined {
        return this['data_points'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmHistoryItemV2StatusEnum {
    OK = 'ok',
    ALARM = 'alarm',
    INVALID = 'invalid'
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmHistoryItemV2LevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}

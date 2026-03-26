import { AlarmSubDetailResopnse } from './AlarmSubDetailResopnse';


export class AlarmSubUpdateRequest {
    public name?: string;
    public enable?: number;
    private 'alarm_level'?: string;
    private 'notification_target'?: string;
    private 'notification_target_name'?: string;
    private 'notification_target_type'?: string;
    public language?: string;
    private 'time_zone'?: string;
    private 'cluster_id'?: string;
    private 'alarm_details'?: Array<AlarmSubDetailResopnse>;
    public constructor(name?: string, notificationTarget?: string, notificationTargetName?: string, notificationTargetType?: string) { 
        this['name'] = name;
        this['notification_target'] = notificationTarget;
        this['notification_target_name'] = notificationTargetName;
        this['notification_target_type'] = notificationTargetType;
    }
    public withName(name: string): AlarmSubUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: number): AlarmSubUpdateRequest {
        this['enable'] = enable;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): AlarmSubUpdateRequest {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
    public withNotificationTarget(notificationTarget: string): AlarmSubUpdateRequest {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string  | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget(): string | undefined {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): AlarmSubUpdateRequest {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string  | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName(): string | undefined {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): AlarmSubUpdateRequest {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string  | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType(): string | undefined {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): AlarmSubUpdateRequest {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): AlarmSubUpdateRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withClusterId(clusterId: string): AlarmSubUpdateRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAlarmDetails(alarmDetails: Array<AlarmSubDetailResopnse>): AlarmSubUpdateRequest {
        this['alarm_details'] = alarmDetails;
        return this;
    }
    public set alarmDetails(alarmDetails: Array<AlarmSubDetailResopnse>  | undefined) {
        this['alarm_details'] = alarmDetails;
    }
    public get alarmDetails(): Array<AlarmSubDetailResopnse> | undefined {
        return this['alarm_details'];
    }
}
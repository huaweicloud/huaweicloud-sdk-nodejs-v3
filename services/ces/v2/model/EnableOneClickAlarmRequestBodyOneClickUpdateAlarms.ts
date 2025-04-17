import { AlarmType } from './AlarmType';
import { Notification } from './Notification';
import { Policy } from './Policy';
import { ResourcesInListResp } from './ResourcesInListResp';


export class EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
    private 'alarm_id'?: string;
    public name?: string;
    public description?: string;
    public namespace?: string;
    public policies?: Array<Policy>;
    public resources?: Array<ResourcesInListResp>;
    public type?: AlarmType;
    public enabled?: boolean;
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'notification_manner'?: EnableOneClickAlarmRequestBodyOneClickUpdateAlarmsNotificationMannerEnum | string;
    private 'notification_policy_ids'?: Array<string>;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicies(policies: Array<Policy>): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['policies'] = policies;
        return this;
    }
    public withResources(resources: Array<ResourcesInListResp>): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['resources'] = resources;
        return this;
    }
    public withType(type: AlarmType): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['enabled'] = enabled;
        return this;
    }
    public withNotificationEnabled(notificationEnabled: boolean): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withNotificationManner(notificationManner: EnableOneClickAlarmRequestBodyOneClickUpdateAlarmsNotificationMannerEnum | string): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['notification_manner'] = notificationManner;
        return this;
    }
    public set notificationManner(notificationManner: EnableOneClickAlarmRequestBodyOneClickUpdateAlarmsNotificationMannerEnum | string  | undefined) {
        this['notification_manner'] = notificationManner;
    }
    public get notificationManner(): EnableOneClickAlarmRequestBodyOneClickUpdateAlarmsNotificationMannerEnum | string | undefined {
        return this['notification_manner'];
    }
    public withNotificationPolicyIds(notificationPolicyIds: Array<string>): EnableOneClickAlarmRequestBodyOneClickUpdateAlarms {
        this['notification_policy_ids'] = notificationPolicyIds;
        return this;
    }
    public set notificationPolicyIds(notificationPolicyIds: Array<string>  | undefined) {
        this['notification_policy_ids'] = notificationPolicyIds;
    }
    public get notificationPolicyIds(): Array<string> | undefined {
        return this['notification_policy_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnableOneClickAlarmRequestBodyOneClickUpdateAlarmsNotificationMannerEnum {
    NOTIFICATION_POLICY = 'NOTIFICATION_POLICY'
}

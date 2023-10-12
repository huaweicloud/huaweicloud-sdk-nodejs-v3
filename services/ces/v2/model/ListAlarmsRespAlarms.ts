import { AlarmType } from './AlarmType';
import { Notification } from './Notification';
import { OneClickAlarmPolicy } from './OneClickAlarmPolicy';
import { ResourcesInListResp } from './ResourcesInListResp';


export class ListAlarmsRespAlarms {
    private 'alarm_id'?: string;
    public name?: string;
    public description?: string;
    public namespace?: string;
    public policies?: Array<OneClickAlarmPolicy>;
    public resources?: Array<ResourcesInListResp>;
    public type?: AlarmType;
    public enabled?: boolean;
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): ListAlarmsRespAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAlarmsRespAlarms {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListAlarmsRespAlarms {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmsRespAlarms {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicies(policies: Array<OneClickAlarmPolicy>): ListAlarmsRespAlarms {
        this['policies'] = policies;
        return this;
    }
    public withResources(resources: Array<ResourcesInListResp>): ListAlarmsRespAlarms {
        this['resources'] = resources;
        return this;
    }
    public withType(type: AlarmType): ListAlarmsRespAlarms {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): ListAlarmsRespAlarms {
        this['enabled'] = enabled;
        return this;
    }
    public withNotificationEnabled(notificationEnabled: boolean): ListAlarmsRespAlarms {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): ListAlarmsRespAlarms {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): ListAlarmsRespAlarms {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): ListAlarmsRespAlarms {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): ListAlarmsRespAlarms {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
}
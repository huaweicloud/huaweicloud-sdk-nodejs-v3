import { AlarmType } from './AlarmType';
import { Notification } from './Notification';
import { Policy } from './Policy';
import { ResourcesInListResp } from './ResourcesInListResp';


export class ListAlarmResponseAlarms {
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
    private 'enterprise_project_id'?: string;
    private 'alarm_template_id'?: string;
    private 'product_name'?: string;
    private 'resource_level'?: ListAlarmResponseAlarmsResourceLevelEnum | string;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): ListAlarmResponseAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAlarmResponseAlarms {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListAlarmResponseAlarms {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmResponseAlarms {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicies(policies: Array<Policy>): ListAlarmResponseAlarms {
        this['policies'] = policies;
        return this;
    }
    public withResources(resources: Array<ResourcesInListResp>): ListAlarmResponseAlarms {
        this['resources'] = resources;
        return this;
    }
    public withType(type: AlarmType): ListAlarmResponseAlarms {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): ListAlarmResponseAlarms {
        this['enabled'] = enabled;
        return this;
    }
    public withNotificationEnabled(notificationEnabled: boolean): ListAlarmResponseAlarms {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): ListAlarmResponseAlarms {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): ListAlarmResponseAlarms {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): ListAlarmResponseAlarms {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): ListAlarmResponseAlarms {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmResponseAlarms {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAlarmTemplateId(alarmTemplateId: string): ListAlarmResponseAlarms {
        this['alarm_template_id'] = alarmTemplateId;
        return this;
    }
    public set alarmTemplateId(alarmTemplateId: string  | undefined) {
        this['alarm_template_id'] = alarmTemplateId;
    }
    public get alarmTemplateId(): string | undefined {
        return this['alarm_template_id'];
    }
    public withProductName(productName: string): ListAlarmResponseAlarms {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withResourceLevel(resourceLevel: ListAlarmResponseAlarmsResourceLevelEnum | string): ListAlarmResponseAlarms {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ListAlarmResponseAlarmsResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ListAlarmResponseAlarmsResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmResponseAlarmsResourceLevelEnum {
    PRODUCT = 'product',
    DIMENSION = 'dimension'
}

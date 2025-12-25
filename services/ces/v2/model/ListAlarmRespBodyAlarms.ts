import { AlarmTypeResp } from './AlarmTypeResp';
import { NotificationResp } from './NotificationResp';
import { PolicyResp } from './PolicyResp';
import { ResourceTagResp } from './ResourceTagResp';
import { ResourcesInListResp } from './ResourcesInListResp';


export class ListAlarmRespBodyAlarms {
    private 'alarm_id'?: string;
    public name?: string;
    public description?: string;
    public namespace?: string;
    public policies?: Array<PolicyResp>;
    public resources?: Array<ResourcesInListResp>;
    public type?: AlarmTypeResp;
    public enabled?: boolean;
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<NotificationResp>;
    private 'ok_notifications'?: Array<NotificationResp>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'effective_timezone'?: string;
    private 'enterprise_project_id'?: string;
    private 'alarm_template_id'?: string;
    private 'product_name'?: string;
    private 'resource_level'?: ListAlarmRespBodyAlarmsResourceLevelEnum | string;
    public tags?: Array<ResourceTagResp>;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): ListAlarmRespBodyAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAlarmRespBodyAlarms {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListAlarmRespBodyAlarms {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmRespBodyAlarms {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicies(policies: Array<PolicyResp>): ListAlarmRespBodyAlarms {
        this['policies'] = policies;
        return this;
    }
    public withResources(resources: Array<ResourcesInListResp>): ListAlarmRespBodyAlarms {
        this['resources'] = resources;
        return this;
    }
    public withType(type: AlarmTypeResp): ListAlarmRespBodyAlarms {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): ListAlarmRespBodyAlarms {
        this['enabled'] = enabled;
        return this;
    }
    public withNotificationEnabled(notificationEnabled: boolean): ListAlarmRespBodyAlarms {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<NotificationResp>): ListAlarmRespBodyAlarms {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<NotificationResp>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<NotificationResp> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<NotificationResp>): ListAlarmRespBodyAlarms {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<NotificationResp>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<NotificationResp> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): ListAlarmRespBodyAlarms {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): ListAlarmRespBodyAlarms {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withEffectiveTimezone(effectiveTimezone: string): ListAlarmRespBodyAlarms {
        this['effective_timezone'] = effectiveTimezone;
        return this;
    }
    public set effectiveTimezone(effectiveTimezone: string  | undefined) {
        this['effective_timezone'] = effectiveTimezone;
    }
    public get effectiveTimezone(): string | undefined {
        return this['effective_timezone'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmRespBodyAlarms {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAlarmTemplateId(alarmTemplateId: string): ListAlarmRespBodyAlarms {
        this['alarm_template_id'] = alarmTemplateId;
        return this;
    }
    public set alarmTemplateId(alarmTemplateId: string  | undefined) {
        this['alarm_template_id'] = alarmTemplateId;
    }
    public get alarmTemplateId(): string | undefined {
        return this['alarm_template_id'];
    }
    public withProductName(productName: string): ListAlarmRespBodyAlarms {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withResourceLevel(resourceLevel: ListAlarmRespBodyAlarmsResourceLevelEnum | string): ListAlarmRespBodyAlarms {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ListAlarmRespBodyAlarmsResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ListAlarmRespBodyAlarmsResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withTags(tags: Array<ResourceTagResp>): ListAlarmRespBodyAlarms {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmRespBodyAlarmsResourceLevelEnum {
    PRODUCT = 'product',
    DIMENSION = 'dimension'
}

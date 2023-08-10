import { AlarmType } from './AlarmType';
import { Dimension } from './Dimension';
import { Notification } from './Notification';
import { Policy } from './Policy';


export class PostAlarmsReqV2 {
    public name?: string;
    public description?: string;
    public namespace?: string;
    private 'resource_group_id'?: string;
    public resources?: Array<Array<Dimension>>;
    public policies?: Array<Policy>;
    public type?: AlarmType;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'enterprise_project_id'?: string;
    public enabled?: boolean;
    private 'notification_enabled'?: boolean;
    private 'alarm_template_id'?: string;
    public constructor(name?: string, namespace?: string, resources?: Array<Array<Dimension>>, policies?: Array<Policy>, type?: AlarmType, enabled?: boolean, notificationEnabled?: boolean) { 
        this['name'] = name;
        this['namespace'] = namespace;
        this['resources'] = resources;
        this['policies'] = policies;
        this['type'] = type;
        this['enabled'] = enabled;
        this['notification_enabled'] = notificationEnabled;
    }
    public withName(name: string): PostAlarmsReqV2 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PostAlarmsReqV2 {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): PostAlarmsReqV2 {
        this['namespace'] = namespace;
        return this;
    }
    public withResourceGroupId(resourceGroupId: string): PostAlarmsReqV2 {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
    public withResources(resources: Array<Array<Dimension>>): PostAlarmsReqV2 {
        this['resources'] = resources;
        return this;
    }
    public withPolicies(policies: Array<Policy>): PostAlarmsReqV2 {
        this['policies'] = policies;
        return this;
    }
    public withType(type: AlarmType): PostAlarmsReqV2 {
        this['type'] = type;
        return this;
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): PostAlarmsReqV2 {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): PostAlarmsReqV2 {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): PostAlarmsReqV2 {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): PostAlarmsReqV2 {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PostAlarmsReqV2 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnabled(enabled: boolean): PostAlarmsReqV2 {
        this['enabled'] = enabled;
        return this;
    }
    public withNotificationEnabled(notificationEnabled: boolean): PostAlarmsReqV2 {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmTemplateId(alarmTemplateId: string): PostAlarmsReqV2 {
        this['alarm_template_id'] = alarmTemplateId;
        return this;
    }
    public set alarmTemplateId(alarmTemplateId: string  | undefined) {
        this['alarm_template_id'] = alarmTemplateId;
    }
    public get alarmTemplateId(): string | undefined {
        return this['alarm_template_id'];
    }
}
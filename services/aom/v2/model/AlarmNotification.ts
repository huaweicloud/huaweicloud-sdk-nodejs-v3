

export class AlarmNotification {
    private 'notification_type'?: AlarmNotificationNotificationTypeEnum | string;
    private 'route_group_enable'?: boolean;
    private 'route_group_rule'?: string;
    private 'notification_enable'?: boolean;
    private 'bind_notification_rule_id'?: string;
    private 'notify_resolved'?: boolean;
    private 'notify_triggered'?: boolean;
    private 'notify_frequency'?: number;
    public constructor(notificationType?: string, routeGroupEnable?: boolean, routeGroupRule?: string) { 
        this['notification_type'] = notificationType;
        this['route_group_enable'] = routeGroupEnable;
        this['route_group_rule'] = routeGroupRule;
    }
    public withNotificationType(notificationType: AlarmNotificationNotificationTypeEnum | string): AlarmNotification {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: AlarmNotificationNotificationTypeEnum | string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): AlarmNotificationNotificationTypeEnum | string | undefined {
        return this['notification_type'];
    }
    public withRouteGroupEnable(routeGroupEnable: boolean): AlarmNotification {
        this['route_group_enable'] = routeGroupEnable;
        return this;
    }
    public set routeGroupEnable(routeGroupEnable: boolean  | undefined) {
        this['route_group_enable'] = routeGroupEnable;
    }
    public get routeGroupEnable(): boolean | undefined {
        return this['route_group_enable'];
    }
    public withRouteGroupRule(routeGroupRule: string): AlarmNotification {
        this['route_group_rule'] = routeGroupRule;
        return this;
    }
    public set routeGroupRule(routeGroupRule: string  | undefined) {
        this['route_group_rule'] = routeGroupRule;
    }
    public get routeGroupRule(): string | undefined {
        return this['route_group_rule'];
    }
    public withNotificationEnable(notificationEnable: boolean): AlarmNotification {
        this['notification_enable'] = notificationEnable;
        return this;
    }
    public set notificationEnable(notificationEnable: boolean  | undefined) {
        this['notification_enable'] = notificationEnable;
    }
    public get notificationEnable(): boolean | undefined {
        return this['notification_enable'];
    }
    public withBindNotificationRuleId(bindNotificationRuleId: string): AlarmNotification {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
        return this;
    }
    public set bindNotificationRuleId(bindNotificationRuleId: string  | undefined) {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
    }
    public get bindNotificationRuleId(): string | undefined {
        return this['bind_notification_rule_id'];
    }
    public withNotifyResolved(notifyResolved: boolean): AlarmNotification {
        this['notify_resolved'] = notifyResolved;
        return this;
    }
    public set notifyResolved(notifyResolved: boolean  | undefined) {
        this['notify_resolved'] = notifyResolved;
    }
    public get notifyResolved(): boolean | undefined {
        return this['notify_resolved'];
    }
    public withNotifyTriggered(notifyTriggered: boolean): AlarmNotification {
        this['notify_triggered'] = notifyTriggered;
        return this;
    }
    public set notifyTriggered(notifyTriggered: boolean  | undefined) {
        this['notify_triggered'] = notifyTriggered;
    }
    public get notifyTriggered(): boolean | undefined {
        return this['notify_triggered'];
    }
    public withNotifyFrequency(notifyFrequency: number): AlarmNotification {
        this['notify_frequency'] = notifyFrequency;
        return this;
    }
    public set notifyFrequency(notifyFrequency: number  | undefined) {
        this['notify_frequency'] = notifyFrequency;
    }
    public get notifyFrequency(): number | undefined {
        return this['notify_frequency'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmNotificationNotificationTypeEnum {
    DIRECT = 'direct',
    ALARM_POLICY = 'alarm_policy'
}

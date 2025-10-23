

export class BatchUpdateActionRules {
    private 'alarm_rule_id'?: number;
    private 'alarm_rule_name'?: string;
    private 'alarm_rule_type'?: string;
    private 'bind_notification_rule_id'?: string;
    public frequency?: string;
    private 'notification_enable'?: boolean;
    private 'notification_type'?: string;
    private 'notify_resolved'?: boolean;
    private 'notify_triggered'?: boolean;
    private 'route_group_enable'?: boolean;
    private 'route_group_rule'?: string;
    public constructor(alarmRuleId?: number, alarmRuleName?: string, alarmRuleType?: string, frequency?: string, notifyResolved?: boolean, notifyTriggered?: boolean) { 
        this['alarm_rule_id'] = alarmRuleId;
        this['alarm_rule_name'] = alarmRuleName;
        this['alarm_rule_type'] = alarmRuleType;
        this['frequency'] = frequency;
        this['notify_resolved'] = notifyResolved;
        this['notify_triggered'] = notifyTriggered;
    }
    public withAlarmRuleId(alarmRuleId: number): BatchUpdateActionRules {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
    public withAlarmRuleName(alarmRuleName: string): BatchUpdateActionRules {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withAlarmRuleType(alarmRuleType: string): BatchUpdateActionRules {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): string | undefined {
        return this['alarm_rule_type'];
    }
    public withBindNotificationRuleId(bindNotificationRuleId: string): BatchUpdateActionRules {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
        return this;
    }
    public set bindNotificationRuleId(bindNotificationRuleId: string  | undefined) {
        this['bind_notification_rule_id'] = bindNotificationRuleId;
    }
    public get bindNotificationRuleId(): string | undefined {
        return this['bind_notification_rule_id'];
    }
    public withFrequency(frequency: string): BatchUpdateActionRules {
        this['frequency'] = frequency;
        return this;
    }
    public withNotificationEnable(notificationEnable: boolean): BatchUpdateActionRules {
        this['notification_enable'] = notificationEnable;
        return this;
    }
    public set notificationEnable(notificationEnable: boolean  | undefined) {
        this['notification_enable'] = notificationEnable;
    }
    public get notificationEnable(): boolean | undefined {
        return this['notification_enable'];
    }
    public withNotificationType(notificationType: string): BatchUpdateActionRules {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): string | undefined {
        return this['notification_type'];
    }
    public withNotifyResolved(notifyResolved: boolean): BatchUpdateActionRules {
        this['notify_resolved'] = notifyResolved;
        return this;
    }
    public set notifyResolved(notifyResolved: boolean  | undefined) {
        this['notify_resolved'] = notifyResolved;
    }
    public get notifyResolved(): boolean | undefined {
        return this['notify_resolved'];
    }
    public withNotifyTriggered(notifyTriggered: boolean): BatchUpdateActionRules {
        this['notify_triggered'] = notifyTriggered;
        return this;
    }
    public set notifyTriggered(notifyTriggered: boolean  | undefined) {
        this['notify_triggered'] = notifyTriggered;
    }
    public get notifyTriggered(): boolean | undefined {
        return this['notify_triggered'];
    }
    public withRouteGroupEnable(routeGroupEnable: boolean): BatchUpdateActionRules {
        this['route_group_enable'] = routeGroupEnable;
        return this;
    }
    public set routeGroupEnable(routeGroupEnable: boolean  | undefined) {
        this['route_group_enable'] = routeGroupEnable;
    }
    public get routeGroupEnable(): boolean | undefined {
        return this['route_group_enable'];
    }
    public withRouteGroupRule(routeGroupRule: string): BatchUpdateActionRules {
        this['route_group_rule'] = routeGroupRule;
        return this;
    }
    public set routeGroupRule(routeGroupRule: string  | undefined) {
        this['route_group_rule'] = routeGroupRule;
    }
    public get routeGroupRule(): string | undefined {
        return this['route_group_rule'];
    }
}
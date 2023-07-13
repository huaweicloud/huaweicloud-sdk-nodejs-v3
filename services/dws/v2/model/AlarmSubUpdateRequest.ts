

export class AlarmSubUpdateRequest {
    public name: string;
    public enable?: number;
    private 'alarm_level'?: string | undefined;
    private 'notification_target': string | undefined;
    private 'notification_target_name': string | undefined;
    private 'notification_target_type': string | undefined;
    public constructor(name?: any, notificationTarget?: any, notificationTargetName?: any, notificationTargetType?: any) { 
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
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withNotificationTarget(notificationTarget: string): AlarmSubUpdateRequest {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): AlarmSubUpdateRequest {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): AlarmSubUpdateRequest {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
}
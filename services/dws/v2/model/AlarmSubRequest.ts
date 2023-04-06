

export class AlarmSubRequest {
    public name: string;
    public enable: string;
    private 'alarm_level'?: string | undefined;
    private 'notification_target': string | undefined;
    private 'notification_target_name': string | undefined;
    private 'notification_target_type': string | undefined;
    private 'time_zone': string | undefined;
    public constructor(name?: any, enable?: any, notificationTarget?: any, notificationTargetName?: any, notificationTargetType?: any, timeZone?: any) { 
        this['name'] = name;
        this['enable'] = enable;
        this['notification_target'] = notificationTarget;
        this['notification_target_name'] = notificationTargetName;
        this['notification_target_type'] = notificationTargetType;
        this['time_zone'] = timeZone;
    }
    public withName(name: string): AlarmSubRequest {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: string): AlarmSubRequest {
        this['enable'] = enable;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): AlarmSubRequest {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withNotificationTarget(notificationTarget: string): AlarmSubRequest {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): AlarmSubRequest {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): AlarmSubRequest {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withTimeZone(timeZone: string): AlarmSubRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone() {
        return this['time_zone'];
    }
}
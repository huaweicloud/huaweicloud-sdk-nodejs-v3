

export class AlarmSubscriptionResponse {
    public id?: string;
    public name?: string;
    public enable?: number;
    private 'alarm_level'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'name_space'?: string | undefined;
    private 'notification_target'?: string | undefined;
    private 'notification_target_name'?: string | undefined;
    private 'notification_target_type'?: string | undefined;
    public language?: string;
    private 'time_zone'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): AlarmSubscriptionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlarmSubscriptionResponse {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: number): AlarmSubscriptionResponse {
        this['enable'] = enable;
        return this;
    }
    public withAlarmLevel(alarmLevel: string): AlarmSubscriptionResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withProjectId(projectId: string): AlarmSubscriptionResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withNameSpace(nameSpace: string): AlarmSubscriptionResponse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace() {
        return this['name_space'];
    }
    public withNotificationTarget(notificationTarget: string): AlarmSubscriptionResponse {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): AlarmSubscriptionResponse {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): AlarmSubscriptionResponse {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withLanguage(language: string): AlarmSubscriptionResponse {
        this['language'] = language;
        return this;
    }
    public withTimeZone(timeZone: string): AlarmSubscriptionResponse {
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
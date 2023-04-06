

export class EventSubRequest {
    public name: string;
    private 'source_type'?: string | undefined;
    private 'source_id'?: string | undefined;
    public category?: string;
    public severity?: string;
    public tag?: string;
    public enable: number;
    private 'notification_target': string | undefined;
    private 'notification_target_name': string | undefined;
    private 'notification_target_type': string | undefined;
    private 'time_zone'?: string | undefined;
    public constructor(name?: any, enable?: any, notificationTarget?: any, notificationTargetName?: any, notificationTargetType?: any) { 
        this['name'] = name;
        this['enable'] = enable;
        this['notification_target'] = notificationTarget;
        this['notification_target_name'] = notificationTargetName;
        this['notification_target_type'] = notificationTargetType;
    }
    public withName(name: string): EventSubRequest {
        this['name'] = name;
        return this;
    }
    public withSourceType(sourceType: string): EventSubRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): EventSubRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withCategory(category: string): EventSubRequest {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): EventSubRequest {
        this['severity'] = severity;
        return this;
    }
    public withTag(tag: string): EventSubRequest {
        this['tag'] = tag;
        return this;
    }
    public withEnable(enable: number): EventSubRequest {
        this['enable'] = enable;
        return this;
    }
    public withNotificationTarget(notificationTarget: string): EventSubRequest {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): EventSubRequest {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): EventSubRequest {
        this['notification_target_type'] = notificationTargetType;
        return this;
    }
    public set notificationTargetType(notificationTargetType: string | undefined) {
        this['notification_target_type'] = notificationTargetType;
    }
    public get notificationTargetType() {
        return this['notification_target_type'];
    }
    public withTimeZone(timeZone: string): EventSubRequest {
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


export class EventSubUpdateRequest {
    public name: string;
    private 'source_type'?: string | undefined;
    private 'source_id'?: string | undefined;
    public category?: string;
    public severity?: string;
    public tag?: string;
    public enable?: number;
    private 'notification_target': string | undefined;
    private 'notification_target_name': string | undefined;
    private 'notification_target_type': string | undefined;
    public constructor(name?: any, notificationTarget?: any, notificationTargetName?: any, notificationTargetType?: any) { 
        this['name'] = name;
        this['notification_target'] = notificationTarget;
        this['notification_target_name'] = notificationTargetName;
        this['notification_target_type'] = notificationTargetType;
    }
    public withName(name: string): EventSubUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withSourceType(sourceType: string): EventSubUpdateRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): EventSubUpdateRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withCategory(category: string): EventSubUpdateRequest {
        this['category'] = category;
        return this;
    }
    public withSeverity(severity: string): EventSubUpdateRequest {
        this['severity'] = severity;
        return this;
    }
    public withTag(tag: string): EventSubUpdateRequest {
        this['tag'] = tag;
        return this;
    }
    public withEnable(enable: number): EventSubUpdateRequest {
        this['enable'] = enable;
        return this;
    }
    public withNotificationTarget(notificationTarget: string): EventSubUpdateRequest {
        this['notification_target'] = notificationTarget;
        return this;
    }
    public set notificationTarget(notificationTarget: string | undefined) {
        this['notification_target'] = notificationTarget;
    }
    public get notificationTarget() {
        return this['notification_target'];
    }
    public withNotificationTargetName(notificationTargetName: string): EventSubUpdateRequest {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName() {
        return this['notification_target_name'];
    }
    public withNotificationTargetType(notificationTargetType: string): EventSubUpdateRequest {
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
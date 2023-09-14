

export class Record {
    private 'event_name'?: string;
    private 'trigger_event_type'?: string;
    private 'create_time'?: number;
    private 'secret_name'?: string;
    private 'secret_type'?: string;
    private 'notification_target_name'?: string;
    private 'notification_target_id'?: string;
    private 'notification_content'?: string;
    private 'notification_status'?: string;
    public constructor() { 
    }
    public withEventName(eventName: string): Record {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withTriggerEventType(triggerEventType: string): Record {
        this['trigger_event_type'] = triggerEventType;
        return this;
    }
    public set triggerEventType(triggerEventType: string  | undefined) {
        this['trigger_event_type'] = triggerEventType;
    }
    public get triggerEventType(): string | undefined {
        return this['trigger_event_type'];
    }
    public withCreateTime(createTime: number): Record {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withSecretName(secretName: string): Record {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withSecretType(secretType: string): Record {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withNotificationTargetName(notificationTargetName: string): Record {
        this['notification_target_name'] = notificationTargetName;
        return this;
    }
    public set notificationTargetName(notificationTargetName: string  | undefined) {
        this['notification_target_name'] = notificationTargetName;
    }
    public get notificationTargetName(): string | undefined {
        return this['notification_target_name'];
    }
    public withNotificationTargetId(notificationTargetId: string): Record {
        this['notification_target_id'] = notificationTargetId;
        return this;
    }
    public set notificationTargetId(notificationTargetId: string  | undefined) {
        this['notification_target_id'] = notificationTargetId;
    }
    public get notificationTargetId(): string | undefined {
        return this['notification_target_id'];
    }
    public withNotificationContent(notificationContent: string): Record {
        this['notification_content'] = notificationContent;
        return this;
    }
    public set notificationContent(notificationContent: string  | undefined) {
        this['notification_content'] = notificationContent;
    }
    public get notificationContent(): string | undefined {
        return this['notification_content'];
    }
    public withNotificationStatus(notificationStatus: string): Record {
        this['notification_status'] = notificationStatus;
        return this;
    }
    public set notificationStatus(notificationStatus: string  | undefined) {
        this['notification_status'] = notificationStatus;
    }
    public get notificationStatus(): string | undefined {
        return this['notification_status'];
    }
}
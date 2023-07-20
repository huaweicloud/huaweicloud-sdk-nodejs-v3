

export class DeleteNotificationRequest {
    private 'notification_id'?: string;
    public constructor(notificationId?: string) { 
        this['notification_id'] = notificationId;
    }
    public withNotificationId(notificationId: string): DeleteNotificationRequest {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string  | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId(): string | undefined {
        return this['notification_id'];
    }
}
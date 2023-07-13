

export class DeleteNotificationRequest {
    private 'notification_id': string | undefined;
    public constructor(notificationId?: any) { 
        this['notification_id'] = notificationId;
    }
    public withNotificationId(notificationId: string): DeleteNotificationRequest {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId() {
        return this['notification_id'];
    }
}
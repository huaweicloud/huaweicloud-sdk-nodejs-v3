

export class DeleteNotificationSettingRequest {
    private 'notification_setting_id'?: string;
    public constructor(notificationSettingId?: string) { 
        this['notification_setting_id'] = notificationSettingId;
    }
    public withNotificationSettingId(notificationSettingId: string): DeleteNotificationSettingRequest {
        this['notification_setting_id'] = notificationSettingId;
        return this;
    }
    public set notificationSettingId(notificationSettingId: string  | undefined) {
        this['notification_setting_id'] = notificationSettingId;
    }
    public get notificationSettingId(): string | undefined {
        return this['notification_setting_id'];
    }
}
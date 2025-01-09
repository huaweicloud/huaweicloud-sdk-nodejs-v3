

export class SendDesktopPoolNotificationsReq {
    public notifications?: string;
    public constructor(notifications?: string) { 
        this['notifications'] = notifications;
    }
    public withNotifications(notifications: string): SendDesktopPoolNotificationsReq {
        this['notifications'] = notifications;
        return this;
    }
}
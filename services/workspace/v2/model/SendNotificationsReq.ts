

export class SendNotificationsReq {
    private 'desktop_ids'?: Array<string>;
    public notifications?: string;
    public constructor(desktopIds?: Array<string>, notifications?: string) { 
        this['desktop_ids'] = desktopIds;
        this['notifications'] = notifications;
    }
    public withDesktopIds(desktopIds: Array<string>): SendNotificationsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withNotifications(notifications: string): SendNotificationsReq {
        this['notifications'] = notifications;
        return this;
    }
}
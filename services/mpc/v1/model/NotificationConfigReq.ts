import { Notification } from './Notification';


export class NotificationConfigReq {
    public notifications?: Array<Notification>;
    public constructor(notifications?: Array<Notification>) { 
        this['notifications'] = notifications;
    }
    public withNotifications(notifications: Array<Notification>): NotificationConfigReq {
        this['notifications'] = notifications;
        return this;
    }
}
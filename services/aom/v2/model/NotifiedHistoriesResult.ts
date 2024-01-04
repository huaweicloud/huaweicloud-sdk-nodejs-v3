import { Notifications } from './Notifications';


export class NotifiedHistoriesResult {
    private 'event_sn'?: string;
    public notifications?: Array<Notifications>;
    public constructor() { 
    }
    public withEventSn(eventSn: string): NotifiedHistoriesResult {
        this['event_sn'] = eventSn;
        return this;
    }
    public set eventSn(eventSn: string  | undefined) {
        this['event_sn'] = eventSn;
    }
    public get eventSn(): string | undefined {
        return this['event_sn'];
    }
    public withNotifications(notifications: Array<Notifications>): NotifiedHistoriesResult {
        this['notifications'] = notifications;
        return this;
    }
}
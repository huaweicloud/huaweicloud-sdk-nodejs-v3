import { NotifyEventEnum } from './NotifyEventEnum';


export class LiveNotifyConfig {
    private 'notify_events'?: Array<NotifyEventEnum>;
    public constructor() { 
    }
    public withNotifyEvents(notifyEvents: Array<NotifyEventEnum>): LiveNotifyConfig {
        this['notify_events'] = notifyEvents;
        return this;
    }
    public set notifyEvents(notifyEvents: Array<NotifyEventEnum>  | undefined) {
        this['notify_events'] = notifyEvents;
    }
    public get notifyEvents(): Array<NotifyEventEnum> | undefined {
        return this['notify_events'];
    }
}
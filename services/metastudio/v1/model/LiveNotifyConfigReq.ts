import { NotifyEventEnum } from './NotifyEventEnum';


export class LiveNotifyConfigReq {
    public action?: LiveNotifyConfigReqActionEnum | string;
    private 'notify_events'?: Array<NotifyEventEnum>;
    public constructor() { 
    }
    public withAction(action: LiveNotifyConfigReqActionEnum | string): LiveNotifyConfigReq {
        this['action'] = action;
        return this;
    }
    public withNotifyEvents(notifyEvents: Array<NotifyEventEnum>): LiveNotifyConfigReq {
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

/**
    * @export
    * @enum {string}
    */
export enum LiveNotifyConfigReqActionEnum {
    ADD = 'add',
    DEL = 'del',
    REPLACE = 'replace'
}

import { EventQueryParam2 } from './EventQueryParam2';


export class ListEventsRequest {
    public type?: ListEventsRequestTypeEnum | string;
    public body?: EventQueryParam2;
    public constructor() { 
    }
    public withType(type: ListEventsRequestTypeEnum | string): ListEventsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: EventQueryParam2): ListEventsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventsRequestTypeEnum {
    HISTORY_ALERT = 'history_alert',
    ACTIVE_ALERT = 'active_alert'
}

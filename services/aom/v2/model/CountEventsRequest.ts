import { EventQueryParam } from './EventQueryParam';


export class CountEventsRequest {
    public type?: CountEventsRequestTypeEnum | string;
    public body?: EventQueryParam;
    public constructor() { 
    }
    public withType(type: CountEventsRequestTypeEnum | string): CountEventsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: EventQueryParam): CountEventsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountEventsRequestTypeEnum {
    HISTORY_ALERT = 'history_alert',
    ACTIVE_ALERT = 'active_alert'
}

import { EventQueryParam2 } from './EventQueryParam2';


export class ListEventsRequest {
    public type?: ListEventsRequestTypeEnum | string;
    private 'Enterprise-Project-Id'?: string;
    public limit?: number;
    public marker?: string;
    public body?: EventQueryParam2;
    public constructor() { 
    }
    public withType(type: ListEventsRequestTypeEnum | string): ListEventsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventsRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withLimit(limit: number): ListEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEventsRequest {
        this['marker'] = marker;
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

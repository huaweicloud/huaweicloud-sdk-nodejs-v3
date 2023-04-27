import { ListActiveOrHistoryAlarmsRequestBody } from './ListActiveOrHistoryAlarmsRequestBody';


export class ListActiveOrHistoryAlarmsRequest {
    private 'domain_id': string | undefined;
    public type: ListActiveOrHistoryAlarmsRequestTypeEnum;
    public marker?: string;
    public limit?: number;
    private 'Content-Type': string | undefined;
    public body?: ListActiveOrHistoryAlarmsRequestBody;
    public constructor(domainId?: any, type?: any, contentType?: any) { 
        this['domain_id'] = domainId;
        this['type'] = type;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListActiveOrHistoryAlarmsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withType(type: ListActiveOrHistoryAlarmsRequestTypeEnum): ListActiveOrHistoryAlarmsRequest {
        this['type'] = type;
        return this;
    }
    public withMarker(marker: string): ListActiveOrHistoryAlarmsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListActiveOrHistoryAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
    public withContentType(contentType: string): ListActiveOrHistoryAlarmsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: ListActiveOrHistoryAlarmsRequestBody): ListActiveOrHistoryAlarmsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListActiveOrHistoryAlarmsRequestTypeEnum {
    ACTIVE_ALERT = 'active_alert',
    HISTORY_ALERT = 'history_alert'
}

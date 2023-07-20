import { ListActiveOrHistoryAlarmsRequestBody } from './ListActiveOrHistoryAlarmsRequestBody';


export class ListActiveOrHistoryAlarmsRequest {
    private 'domain_id'?: string;
    public type?: ListActiveOrHistoryAlarmsRequestTypeEnum | string;
    public marker?: string;
    public limit?: number;
    private 'Content-Type'?: string;
    public body?: ListActiveOrHistoryAlarmsRequestBody;
    public constructor(domainId?: string, type?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['type'] = type;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListActiveOrHistoryAlarmsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: ListActiveOrHistoryAlarmsRequestTypeEnum | string): ListActiveOrHistoryAlarmsRequest {
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
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
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

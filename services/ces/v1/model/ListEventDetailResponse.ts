import { EventInfoDetail } from './EventInfoDetail';
import { MetricsDimension } from './MetricsDimension';
import { TotalMetaData } from './TotalMetaData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventDetailResponse extends SdkResponse {
    private 'event_name'?: string;
    private 'event_type'?: ListEventDetailResponseEventTypeEnum | string;
    private 'event_users'?: Array<string>;
    private 'event_sources'?: Array<string>;
    private 'event_info'?: Array<EventInfoDetail>;
    private 'meta_data'?: TotalMetaData;
    public dimensions?: MetricsDimension;
    public constructor() { 
        super();
    }
    public withEventName(eventName: string): ListEventDetailResponse {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: ListEventDetailResponseEventTypeEnum | string): ListEventDetailResponse {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: ListEventDetailResponseEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): ListEventDetailResponseEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withEventUsers(eventUsers: Array<string>): ListEventDetailResponse {
        this['event_users'] = eventUsers;
        return this;
    }
    public set eventUsers(eventUsers: Array<string>  | undefined) {
        this['event_users'] = eventUsers;
    }
    public get eventUsers(): Array<string> | undefined {
        return this['event_users'];
    }
    public withEventSources(eventSources: Array<string>): ListEventDetailResponse {
        this['event_sources'] = eventSources;
        return this;
    }
    public set eventSources(eventSources: Array<string>  | undefined) {
        this['event_sources'] = eventSources;
    }
    public get eventSources(): Array<string> | undefined {
        return this['event_sources'];
    }
    public withEventInfo(eventInfo: Array<EventInfoDetail>): ListEventDetailResponse {
        this['event_info'] = eventInfo;
        return this;
    }
    public set eventInfo(eventInfo: Array<EventInfoDetail>  | undefined) {
        this['event_info'] = eventInfo;
    }
    public get eventInfo(): Array<EventInfoDetail> | undefined {
        return this['event_info'];
    }
    public withMetaData(metaData: TotalMetaData): ListEventDetailResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: TotalMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): TotalMetaData | undefined {
        return this['meta_data'];
    }
    public withDimensions(dimensions: MetricsDimension): ListEventDetailResponse {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventDetailResponseEventTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM'
}

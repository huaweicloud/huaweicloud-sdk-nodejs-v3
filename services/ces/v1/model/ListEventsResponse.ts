import { EventInfo } from './EventInfo';
import { TotalMetaData } from './TotalMetaData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public events?: Array<EventInfo>;
    private 'meta_data'?: TotalMetaData;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<EventInfo>): ListEventsResponse {
        this['events'] = events;
        return this;
    }
    public withMetaData(metaData: TotalMetaData): ListEventsResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: TotalMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): TotalMetaData | undefined {
        return this['meta_data'];
    }
}
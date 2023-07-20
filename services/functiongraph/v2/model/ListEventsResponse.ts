import { ListEventsResult } from './ListEventsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public count?: number;
    public events?: Array<ListEventsResult>;
    private 'next_marker'?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListEventsResponse {
        this['count'] = count;
        return this;
    }
    public withEvents(events: Array<ListEventsResult>): ListEventsResponse {
        this['events'] = events;
        return this;
    }
    public withNextMarker(nextMarker: number): ListEventsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
}
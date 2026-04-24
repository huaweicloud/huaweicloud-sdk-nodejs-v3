import { EventSearchResultV2Events } from './EventSearchResultV2Events';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSearchFactoryEventsResponse extends SdkResponse {
    public events?: Array<EventSearchResultV2Events>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<EventSearchResultV2Events>): ListSearchFactoryEventsResponse {
        this['events'] = events;
        return this;
    }
    public withTotal(total: number): ListSearchFactoryEventsResponse {
        this['total'] = total;
        return this;
    }
}
import { EventListMeta } from './EventListMeta';
import { EventModel } from './EventModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: EventListMeta;
    public items?: Array<EventModel>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListEventsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListEventsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: EventListMeta): ListEventsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<EventModel>): ListEventsResponse {
        this['items'] = items;
        return this;
    }
}
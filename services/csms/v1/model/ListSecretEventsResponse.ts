import { Event } from './Event';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretEventsResponse extends SdkResponse {
    public events?: Array<Event>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<Event>): ListSecretEventsResponse {
        this['events'] = events;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListSecretEventsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}
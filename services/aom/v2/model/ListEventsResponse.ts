import { ListEventModel } from './ListEventModel';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventsResponse extends SdkResponse {
    public events?: Array<ListEventModel>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withEvents(events: Array<ListEventModel>): ListEventsResponse {
        this['events'] = events;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListEventsResponse {
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
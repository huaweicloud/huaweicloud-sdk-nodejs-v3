import { UserEventRsp } from './UserEventRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserEventsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<UserEventRsp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUserEventsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<UserEventRsp>): ListUserEventsResponse {
        this['items'] = items;
        return this;
    }
}
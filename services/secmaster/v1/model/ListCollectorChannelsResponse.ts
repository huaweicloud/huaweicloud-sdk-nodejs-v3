import { Channel } from './Channel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorChannelsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Channel>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorChannelsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Channel>): ListCollectorChannelsResponse {
        this['records'] = records;
        return this;
    }
}
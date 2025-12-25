import { ChannelInstance } from './ChannelInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorInstancesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ChannelInstance>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ChannelInstance>): ListCollectorInstancesResponse {
        this['records'] = records;
        return this;
    }
}
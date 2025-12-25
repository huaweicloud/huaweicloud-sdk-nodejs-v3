import { Connection } from './Connection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorConnectionsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Connection>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorConnectionsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Connection>): ListCollectorConnectionsResponse {
        this['records'] = records;
        return this;
    }
}
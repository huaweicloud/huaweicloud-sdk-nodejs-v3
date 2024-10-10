import { ConnectionResp } from './ConnectionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionsResponse extends SdkResponse {
    public connections?: Array<ConnectionResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionResp>): ListConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withCount(count: number): ListConnectionsResponse {
        this['count'] = count;
        return this;
    }
}
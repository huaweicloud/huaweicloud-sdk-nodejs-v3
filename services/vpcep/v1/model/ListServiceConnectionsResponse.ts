import { ConnectionEndpoints } from './ConnectionEndpoints';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceConnectionsResponse extends SdkResponse {
    public connections?: Array<ConnectionEndpoints>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionEndpoints>): ListServiceConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withTotalCount(totalCount: number): ListServiceConnectionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
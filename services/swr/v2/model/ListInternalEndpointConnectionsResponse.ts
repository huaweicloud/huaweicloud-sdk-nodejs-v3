import { ConnectionItem } from './ConnectionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternalEndpointConnectionsResponse extends SdkResponse {
    public connections?: Array<ConnectionItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionItem>): ListInternalEndpointConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withTotalCount(totalCount: number): ListInternalEndpointConnectionsResponse {
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
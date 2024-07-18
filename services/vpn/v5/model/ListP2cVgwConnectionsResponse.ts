import { Connection } from './Connection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListP2cVgwConnectionsResponse extends SdkResponse {
    public connections?: Array<Connection>;
    private 'total_count'?: number;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<Connection>): ListP2cVgwConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withTotalCount(totalCount: number): ListP2cVgwConnectionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRequestId(requestId: string): ListP2cVgwConnectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}
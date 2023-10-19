import { CentralNetworkConnection } from './CentralNetworkConnection';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkConnectionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_connections'?: Array<CentralNetworkConnection>;
    public constructor(requestId?: string, centralNetworkConnections?: Array<CentralNetworkConnection>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_connections'] = centralNetworkConnections;
    }
    public withRequestId(requestId: string): ListCentralNetworkConnectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkConnectionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkConnections(centralNetworkConnections: Array<CentralNetworkConnection>): ListCentralNetworkConnectionsResponse {
        this['central_network_connections'] = centralNetworkConnections;
        return this;
    }
    public set centralNetworkConnections(centralNetworkConnections: Array<CentralNetworkConnection>  | undefined) {
        this['central_network_connections'] = centralNetworkConnections;
    }
    public get centralNetworkConnections(): Array<CentralNetworkConnection> | undefined {
        return this['central_network_connections'];
    }
}
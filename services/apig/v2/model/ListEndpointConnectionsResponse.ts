import { BasePage } from './BasePage';
import { EndpointConnection } from './EndpointConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointConnectionsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public connections?: Array<EndpointConnection>;
    private 'x-request-id'?: string;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListEndpointConnectionsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListEndpointConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withConnections(connections: Array<EndpointConnection>): ListEndpointConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withXRequestId(xRequestId: string): ListEndpointConnectionsResponse {
        this['x-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['x-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['x-request-id'];
    }
}
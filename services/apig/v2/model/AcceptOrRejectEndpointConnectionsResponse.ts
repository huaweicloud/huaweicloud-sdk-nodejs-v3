import { BasePage } from './BasePage';
import { EndpointConnection } from './EndpointConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptOrRejectEndpointConnectionsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public connections?: Array<EndpointConnection>;
    private 'x-request-id'?: string;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): AcceptOrRejectEndpointConnectionsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): AcceptOrRejectEndpointConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withConnections(connections: Array<EndpointConnection>): AcceptOrRejectEndpointConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
    public withXRequestId(xRequestId: string): AcceptOrRejectEndpointConnectionsResponse {
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
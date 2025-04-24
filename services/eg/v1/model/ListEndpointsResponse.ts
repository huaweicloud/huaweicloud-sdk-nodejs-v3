import { EndpointInfo } from './EndpointInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<EndpointInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEndpointsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEndpointsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<EndpointInfo>): ListEndpointsResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListEndpointsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
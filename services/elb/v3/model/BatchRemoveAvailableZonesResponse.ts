import { LoadBalancer } from './LoadBalancer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRemoveAvailableZonesResponse extends SdkResponse {
    public loadbalancer?: LoadBalancer;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadBalancer): BatchRemoveAvailableZonesResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withRequestId(requestId: string): BatchRemoveAvailableZonesResponse {
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
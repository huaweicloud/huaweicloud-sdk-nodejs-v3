import { LoadBalancer } from './LoadBalancer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddAvailableZonesResponse extends SdkResponse {
    public loadbalancer?: LoadBalancer;
    private 'request_id'?: string;
    private 'loadbalancer_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadBalancer): BatchAddAvailableZonesResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withRequestId(requestId: string): BatchAddAvailableZonesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): BatchAddAvailableZonesResponse {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withOrderId(orderId: string): BatchAddAvailableZonesResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}
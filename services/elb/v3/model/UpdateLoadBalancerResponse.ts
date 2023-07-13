import { LoadBalancer } from './LoadBalancer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLoadBalancerResponse extends SdkResponse {
    public loadbalancer?: LoadBalancer;
    private 'loadbalancer_id'?: string | undefined;
    private 'order_id'?: string | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadBalancer): UpdateLoadBalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): UpdateLoadBalancerResponse {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withOrderId(orderId: string): UpdateLoadBalancerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withRequestId(requestId: string): UpdateLoadBalancerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}
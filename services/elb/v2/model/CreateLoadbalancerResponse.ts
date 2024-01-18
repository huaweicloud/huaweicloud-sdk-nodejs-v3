import { LoadbalancerResp } from './LoadbalancerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLoadbalancerResponse extends SdkResponse {
    public loadbalancer?: LoadbalancerResp;
    private 'order_id'?: string;
    private 'loadbalancer_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadbalancerResp): CreateLoadbalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withOrderId(orderId: string): CreateLoadbalancerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLoadbalancerResponse {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
}
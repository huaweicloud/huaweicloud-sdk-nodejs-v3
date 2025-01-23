
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateLoadBalancersResponse extends SdkResponse {
    private 'loadbalancer_ids'?: Array<string>;
    private 'job_id'?: string;
    private 'order_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancerIds(loadbalancerIds: Array<string>): BatchCreateLoadBalancersResponse {
        this['loadbalancer_ids'] = loadbalancerIds;
        return this;
    }
    public set loadbalancerIds(loadbalancerIds: Array<string>  | undefined) {
        this['loadbalancer_ids'] = loadbalancerIds;
    }
    public get loadbalancerIds(): Array<string> | undefined {
        return this['loadbalancer_ids'];
    }
    public withJobId(jobId: string): BatchCreateLoadBalancersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): BatchCreateLoadBalancersResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRequestId(requestId: string): BatchCreateLoadBalancersResponse {
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
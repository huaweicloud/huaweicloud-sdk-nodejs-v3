import { BatchDisableDomainIPsRequestBody } from './BatchDisableDomainIPsRequestBody';


export class BatchDisableDomainIPsRequest {
    private 'loadbalancer_id'?: string;
    public body?: BatchDisableDomainIPsRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchDisableDomainIPsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchDisableDomainIPsRequestBody): BatchDisableDomainIPsRequest {
        this['body'] = body;
        return this;
    }
}
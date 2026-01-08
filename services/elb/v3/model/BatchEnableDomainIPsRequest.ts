import { BatchEnableDomainIPsRequestBody } from './BatchEnableDomainIPsRequestBody';


export class BatchEnableDomainIPsRequest {
    private 'loadbalancer_id'?: string;
    public body?: BatchEnableDomainIPsRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchEnableDomainIPsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchEnableDomainIPsRequestBody): BatchEnableDomainIPsRequest {
        this['body'] = body;
        return this;
    }
}
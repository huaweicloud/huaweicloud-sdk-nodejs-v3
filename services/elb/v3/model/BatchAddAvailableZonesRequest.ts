import { BatchAddAvailableZonesRequestBody } from './BatchAddAvailableZonesRequestBody';


export class BatchAddAvailableZonesRequest {
    private 'loadbalancer_id'?: string;
    public body?: BatchAddAvailableZonesRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchAddAvailableZonesRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchAddAvailableZonesRequestBody): BatchAddAvailableZonesRequest {
        this['body'] = body;
        return this;
    }
}
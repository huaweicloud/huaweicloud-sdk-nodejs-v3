import { BatchRemoveAvailableZonesRequestBody } from './BatchRemoveAvailableZonesRequestBody';


export class BatchRemoveAvailableZonesRequest {
    private 'loadbalancer_id'?: string;
    public body?: BatchRemoveAvailableZonesRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchRemoveAvailableZonesRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchRemoveAvailableZonesRequestBody): BatchRemoveAvailableZonesRequest {
        this['body'] = body;
        return this;
    }
}
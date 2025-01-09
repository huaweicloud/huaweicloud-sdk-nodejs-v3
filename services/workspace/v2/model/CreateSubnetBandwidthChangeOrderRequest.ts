import { CreateSubnetBandwidthChangeOrderRequestBody } from './CreateSubnetBandwidthChangeOrderRequestBody';


export class CreateSubnetBandwidthChangeOrderRequest {
    private 'bandwidth_id'?: string;
    public body?: CreateSubnetBandwidthChangeOrderRequestBody;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): CreateSubnetBandwidthChangeOrderRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBody(body: CreateSubnetBandwidthChangeOrderRequestBody): CreateSubnetBandwidthChangeOrderRequest {
        this['body'] = body;
        return this;
    }
}
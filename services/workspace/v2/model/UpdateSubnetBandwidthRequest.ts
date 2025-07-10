import { UpdateSubnetBandwidthReq } from './UpdateSubnetBandwidthReq';


export class UpdateSubnetBandwidthRequest {
    private 'bandwidth_id'?: string;
    public body?: UpdateSubnetBandwidthReq;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): UpdateSubnetBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBody(body: UpdateSubnetBandwidthReq): UpdateSubnetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
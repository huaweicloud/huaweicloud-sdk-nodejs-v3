import { UpdateSubnetBandwidthControlListReq } from './UpdateSubnetBandwidthControlListReq';


export class UpdateSubnetBandwidthControlListRequest {
    private 'bandwidth_id'?: string;
    public body?: UpdateSubnetBandwidthControlListReq;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): UpdateSubnetBandwidthControlListRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBody(body: UpdateSubnetBandwidthControlListReq): UpdateSubnetBandwidthControlListRequest {
        this['body'] = body;
        return this;
    }
}
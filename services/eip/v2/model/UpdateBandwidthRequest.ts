import { UpdateBandwidthRequestBody } from './UpdateBandwidthRequestBody';


export class UpdateBandwidthRequest {
    private 'bandwidth_id'?: string;
    public body?: UpdateBandwidthRequestBody;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): UpdateBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBody(body: UpdateBandwidthRequestBody): UpdateBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
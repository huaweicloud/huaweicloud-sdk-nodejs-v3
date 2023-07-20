import { UpdatePrePaidBandwidthRequestBody } from './UpdatePrePaidBandwidthRequestBody';


export class UpdatePrePaidBandwidthRequest {
    private 'bandwidth_id'?: string;
    public body?: UpdatePrePaidBandwidthRequestBody;
    public constructor(bandwidthId?: string) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): UpdatePrePaidBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBody(body: UpdatePrePaidBandwidthRequestBody): UpdatePrePaidBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
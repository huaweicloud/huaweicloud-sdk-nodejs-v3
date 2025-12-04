import { UpdateBandwidthRequestBody } from './UpdateBandwidthRequestBody';


export class UpdateBandwidthRequest {
    private 'band_width_id'?: string;
    public body?: UpdateBandwidthRequestBody;
    public constructor(bandWidthId?: string) { 
        this['band_width_id'] = bandWidthId;
    }
    public withBandWidthId(bandWidthId: string): UpdateBandwidthRequest {
        this['band_width_id'] = bandWidthId;
        return this;
    }
    public set bandWidthId(bandWidthId: string  | undefined) {
        this['band_width_id'] = bandWidthId;
    }
    public get bandWidthId(): string | undefined {
        return this['band_width_id'];
    }
    public withBody(body: UpdateBandwidthRequestBody): UpdateBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
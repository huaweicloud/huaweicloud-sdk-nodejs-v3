import { UpdateInterRegionBandwidthRequestBody } from './UpdateInterRegionBandwidthRequestBody';


export class UpdateInterRegionBandwidthRequest {
    public id?: string;
    public body?: UpdateInterRegionBandwidthRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateInterRegionBandwidthRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateInterRegionBandwidthRequestBody): UpdateInterRegionBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
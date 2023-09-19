import { CreateInterRegionBandwidthRequestBody } from './CreateInterRegionBandwidthRequestBody';


export class CreateInterRegionBandwidthRequest {
    public body?: CreateInterRegionBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateInterRegionBandwidthRequestBody): CreateInterRegionBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
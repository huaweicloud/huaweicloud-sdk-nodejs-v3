import { CreateInternetBandwidthRequestBody } from './CreateInternetBandwidthRequestBody';


export class CreateInternetBandwidthRequest {
    public body?: CreateInternetBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateInternetBandwidthRequestBody): CreateInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
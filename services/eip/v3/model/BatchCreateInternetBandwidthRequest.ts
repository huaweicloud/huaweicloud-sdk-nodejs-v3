import { BatchCreateInternetBandwidthRequestBody } from './BatchCreateInternetBandwidthRequestBody';


export class BatchCreateInternetBandwidthRequest {
    public body?: BatchCreateInternetBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateInternetBandwidthRequestBody): BatchCreateInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
import { BatchDetachInternetBandwidthsGlobalEipRequestBody } from './BatchDetachInternetBandwidthsGlobalEipRequestBody';


export class BatchDetachInternetBandwidthRequest {
    public body?: BatchDetachInternetBandwidthsGlobalEipRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDetachInternetBandwidthsGlobalEipRequestBody): BatchDetachInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
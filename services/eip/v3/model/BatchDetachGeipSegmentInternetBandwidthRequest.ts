import { BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody } from './BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody';


export class BatchDetachGeipSegmentInternetBandwidthRequest {
    public body?: BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody): BatchDetachGeipSegmentInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
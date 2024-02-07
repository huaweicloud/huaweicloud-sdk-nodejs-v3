import { BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody } from './BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody';


export class BatchAttachGeipSegmentInternetBandwidthRequest {
    public body?: BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody): BatchAttachGeipSegmentInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
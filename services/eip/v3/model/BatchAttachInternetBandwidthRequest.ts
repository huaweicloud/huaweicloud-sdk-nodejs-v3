import { BatchAttachInternetBandwidthsGlobalEipRequestBody } from './BatchAttachInternetBandwidthsGlobalEipRequestBody';


export class BatchAttachInternetBandwidthRequest {
    public body?: BatchAttachInternetBandwidthsGlobalEipRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAttachInternetBandwidthsGlobalEipRequestBody): BatchAttachInternetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
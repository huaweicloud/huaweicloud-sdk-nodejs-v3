import { BatchCreateBandwidthRequestBody } from './BatchCreateBandwidthRequestBody';


export class BatchCreateSharedBandwidthsRequest {
    public body?: BatchCreateBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateBandwidthRequestBody): BatchCreateSharedBandwidthsRequest {
        this['body'] = body;
        return this;
    }
}
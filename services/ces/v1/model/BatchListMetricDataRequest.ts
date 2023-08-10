import { BatchListMetricDataRequestBody } from './BatchListMetricDataRequestBody';


export class BatchListMetricDataRequest {
    public body?: BatchListMetricDataRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchListMetricDataRequestBody): BatchListMetricDataRequest {
        this['body'] = body;
        return this;
    }
}
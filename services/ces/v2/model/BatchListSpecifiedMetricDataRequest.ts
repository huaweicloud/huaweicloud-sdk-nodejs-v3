import { BatchListSpecifiedMetricDataRequestBody } from './BatchListSpecifiedMetricDataRequestBody';


export class BatchListSpecifiedMetricDataRequest {
    public body?: BatchListSpecifiedMetricDataRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchListSpecifiedMetricDataRequestBody): BatchListSpecifiedMetricDataRequest {
        this['body'] = body;
        return this;
    }
}
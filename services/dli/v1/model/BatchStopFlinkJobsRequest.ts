import { StopFlinkJobsRequestBody } from './StopFlinkJobsRequestBody';


export class BatchStopFlinkJobsRequest {
    public body?: StopFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: StopFlinkJobsRequestBody): BatchStopFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}
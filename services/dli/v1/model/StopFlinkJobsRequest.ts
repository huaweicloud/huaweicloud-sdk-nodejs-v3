import { StopFlinkJobsRequestBody } from './StopFlinkJobsRequestBody';


export class StopFlinkJobsRequest {
    public body?: StopFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: StopFlinkJobsRequestBody): StopFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}